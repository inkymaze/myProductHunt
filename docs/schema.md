## Database Schema

## Products
|  column name | data type | details |
|---------|-----------|---------|
| id      | integer | not null, primary key |
| name | string | not null, indexed, unique |
| desc | string | not null |
| image_url | string |
| product_url | string | not null |


## Users
|  column name | data type | details |
|---------|-----------|---------|
| id      | integer | not null, primary key |
| password_digest | string | not null |
| session_token | string | not null, unique, indexed |
| image_url | string |


## Discussion
|  column name | data type | details |
|---------|-----------|---------|
| id      | integer | not null, primary key |
| product_id | integer | not null, indexed, foreign key |


## Comments
|  column name | data type | details |
|---------|-----------|---------|
| id      | integer | not null, primary key |
| discussion_id | integer | not null, indexed, foreign key |
| user_id | integer | not null, indexed, foreign key |
| text | string | not null |
