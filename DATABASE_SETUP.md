# Database Setup Documentation

## PostgreSQL Database Creation

Created: November 13, 2025

### Database Details

**Database Name:** `rynekpolski`  
**Owner:** postgres  
**Encoding:** UTF-8  
**Collation:** C.UTF-8  
**Character Type:** C.UTF-8  

### User Details

**Username:** `rynekpolski_user`  
**Password:** `rynekpolski2024`  
**Privileges:** Full access to rynekpolski database  
**Schema Owner:** Yes (public schema)  

## Creation Commands

```sql
-- Create database
CREATE DATABASE rynekpolski;

-- Create user
CREATE USER rynekpolski_user WITH PASSWORD 'rynekpolski2024';

-- Grant database privileges
GRANT ALL PRIVILEGES ON DATABASE rynekpolski TO rynekpolski_user;

-- Connect to database
\c rynekpolski

-- Grant schema privileges
GRANT ALL ON SCHEMA public TO rynekpolski_user;
ALTER SCHEMA public OWNER TO rynekpolski_user;
```

## Connection Configuration

### Python (psycopg2)

```python
import psycopg2

DB_CONFIG = {
    'dbname': 'rynekpolski',
    'user': 'rynekpolski_user',
    'password': 'rynekpolski2024',
    'host': 'localhost'
}

# Connect to database
conn = psycopg2.connect(**DB_CONFIG)
```

### Node.js (pg)

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user: 'rynekpolski_user',
  host: 'localhost',
  database: 'rynekpolski',
  password: 'rynekpolski2024',
  port: 5432,
});
```

### Environment Variables

```bash
# .env file
DB_NAME=rynekpolski
DB_USER=rynekpolski_user
DB_PASSWORD=rynekpolski2024
DB_HOST=localhost
DB_PORT=5432
```

## Verification

### Test Connection

```bash
# Using psql
PGPASSWORD='rynekpolski2024' psql -U rynekpolski_user -h localhost -d rynekpolski

# Verify current database and user
SELECT current_database(), current_user;
```

### Check Permissions

```sql
-- List all tables (should be empty initially)
\dt

-- Check current privileges
\dp

-- Verify schema ownership
\dn+
```

## Database Isolation

This database is completely isolated from other applications on the same PostgreSQL server:

| Database | User | Purpose |
|----------|------|---------|
| **rynekpolski** | rynekpolski_user | rynekpolski.com application |
| **lexigo** | myuser | LexiGo English learning app |
| **postgres** | postgres | System database |

## Security Notes

1. ✅ Dedicated database user (not shared)
2. ✅ Strong password authentication
3. ✅ Local-only connections (no external exposure)
4. ✅ Schema-level isolation
5. ⚠️ Change default password in production

## Next Steps

1. Design database schema based on application requirements
2. Create tables and relationships
3. Set up indexes for performance
4. Configure backup strategy
5. Implement application connection pooling

## Backup & Restore

### Create Backup

```bash
pg_dump -U rynekpolski_user -h localhost -d rynekpolski > rynekpolski_backup.sql
```

### Restore Backup

```bash
psql -U rynekpolski_user -h localhost -d rynekpolski < rynekpolski_backup.sql
```

## Troubleshooting

### Common Issues

**Problem:** "Peer authentication failed"  
**Solution:** Use `-h localhost` to force TCP connection instead of Unix socket

**Problem:** "password authentication failed"  
**Solution:** Verify password is 'rynekpolski2024' or check if it needs to be reset

**Problem:** "permission denied for schema public"  
**Solution:** Run `ALTER SCHEMA public OWNER TO rynekpolski_user;`

## Contact

For database administration questions, contact the system administrator.
