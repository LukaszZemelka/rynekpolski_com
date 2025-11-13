import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || 'demo-user';

    // Get all dashboards with user's custom order if exists
    const result = await query(`
      SELECT 
        d.*,
        udl.position as user_position,
        udl.visible as user_visible
      FROM dashboards d
      LEFT JOIN user_dashboard_layouts udl 
        ON d.id = udl.dashboard_id AND udl.user_id = $1
      ORDER BY COALESCE(udl.position, d.default_order)
    `, [userId]);

    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, dashboardId, position, visible } = body;

    const result = await query(`
      INSERT INTO user_dashboard_layouts (user_id, dashboard_id, position, visible, updated_at)
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
      ON CONFLICT (user_id, dashboard_id)
      DO UPDATE SET 
        position = EXCLUDED.position,
        visible = EXCLUDED.visible,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `, [userId, dashboardId, position, visible]);

    return NextResponse.json(result.rows[0]);
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
