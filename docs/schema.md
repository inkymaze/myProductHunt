## Database Schema

## Products
|  column name | data type | details |
|---------|-----------|---------|
| id      | integer | not null, primary key |
| name | string | not null, indexed, unique |
| description | string | not null |
| image_url | string |
| product_URL | string | not null |


## Users
|  column name | data type | details |
|---------|-----------|---------|
| id      | integer | not null, primary key |
| password_digest | string | not null |
| session_token | string | not null, unique, indexed |
| image_url | string |


## Comments
|  column name | data type | details |
|---------|-----------|---------|
| id | integer | not null, primary key |
|product_id | integer | not null, indexed, foreign key |
| user_id | integer | not null, indexed, foreign key |
| text | string | not null |
