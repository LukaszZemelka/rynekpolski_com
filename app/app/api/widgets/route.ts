import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const dashboardId = searchParams.get('dashboardId');
    const userId = searchParams.get('userId') || 'demo-user';

    if (dashboardId) {
      // Get widgets for specific dashboard with user placements
      const result = await query(`
        SELECT 
          w.*,
          uwp.id as placement_id,
          uwp.x_position,
          uwp.y_position,
          uwp.width,
          uwp.height,
          uwp.visible
        FROM widgets w
        LEFT JOIN user_widget_placements uwp 
          ON w.id = uwp.widget_id 
          AND uwp.dashboard_id = $1 
          AND uwp.user_id = $2
        WHERE uwp.id IS NOT NULL AND uwp.visible = true
        ORDER BY uwp.y_position, uwp.x_position
      `, [dashboardId, userId]);

      return NextResponse.json(result.rows);
    } else {
      // Get all available widgets
      const result = await query(`SELECT * FROM widgets ORDER BY name`);
      return NextResponse.json(result.rows);
    }
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, dashboardId, widgetId, x, y, width, height } = body;

    const result = await query(`
      INSERT INTO user_widget_placements 
        (user_id, dashboard_id, widget_id, x_position, y_position, width, height, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP)
      ON CONFLICT (user_id, dashboard_id, widget_id)
      DO UPDATE SET 
        x_position = EXCLUDED.x_position,
        y_position = EXCLUDED.y_position,
        width = EXCLUDED.width,
        height = EXCLUDED.height,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `, [userId, dashboardId, widgetId, x, y, width, height]);

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const placementId = searchParams.get('placementId');

    if (\!placementId) {
      return NextResponse.json({ error: 'placementId required' }, { status: 400 });
    }

    await query(`DELETE FROM user_widget_placements WHERE id = $1`, [placementId]);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
