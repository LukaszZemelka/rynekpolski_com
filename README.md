KARTY/DASHBOARDY: 
- GEOPOLITYKA (sytuacje
- VIDEO (most trending YT videos
- TRENDING BUSINESSES (

FEATURES:
- all allows which user to their business contex. (it's their time when they focused on their busienss and money) so when they want to see video, then dasborad videos will show most trending technologies from their are
- Users will share info about themself, thheir busines and goals AS-IS. But we will allow them to create few TO-BE variants so they can point out where they want to be in



# Rynekpolski.com

PostgreSQL database setup for rynekpolski.com application hosted on AWS EC2.

## Project Status

🚧 **In Development** - Database infrastructure ready

## Infrastructure

- **Platform**: AWS EC2 (Ubuntu 24.04)
- **Database**: PostgreSQL 16
- **Server IP**: 63.178.22.25
- **Database Name**: `rynekpolski`

## Database Configuration

### Connection Details

```python
DB_CONFIG = {
    'dbname': 'rynekpolski',
    'user': 'rynekpolski_user',
    'password': 'rynekpolski2024',
    'host': 'localhost'
}
```

### Database Specifications

- **Encoding**: UTF-8
- **Collation**: C.UTF-8
- **Character Type**: C.UTF-8
- **Owner**: postgres
- **User**: rynekpolski_user (full privileges)

## Current Status

✅ PostgreSQL database created  
✅ Dedicated database user configured  
✅ Full schema permissions granted  
✅ Connection tested and verified  
⏳ Application schema pending  
⏳ Application code pending  

## Database Access

The database is fully isolated from other applications on the same server (including the LexiGo application which uses a separate database).

### Connect via pgAdmin 4

**SSH Tunnel Method (Recommended):**

```bash
ssh -i "LexiGo-KEY.pem" -L 5433:localhost:5432 ubuntu@63.178.22.25 -N
```

**pgAdmin Connection:**
- Host: `localhost`
- Port: `5433`
- Database: `rynekpolski`
- Username: `rynekpolski_user`
- Password: `rynekpolski2024`

### Connect via psql

```bash
ssh -i "LexiGo-KEY.pem" ubuntu@63.178.22.25
PGPASSWORD='rynekpolski2024' psql -U rynekpolski_user -h localhost -d rynekpolski
```

## Security

- Database user has isolated permissions
- Password authentication required
- No external PostgreSQL port exposure (SSH tunnel recommended)
- Separate from other applications

## Next Steps

1. Define application requirements
2. Design database schema
3. Create application structure
4. Implement features
5. Deploy application

## License

TBD

## Author

Łukasz Zemelka
