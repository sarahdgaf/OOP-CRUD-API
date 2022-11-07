
# Paragliding App

This project was created using electron. It is for one who wanted to go paraglide but need to
check whether the weather is safe to do such activity or not. It can also perform CRUD 
operation based on paraglider information. 


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | https://api.openweathermap.org/ |

#### Get item

```http
  GET /api/items/${city}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | city-input |


Takes two numbers and returns the sum.


## Deployment

To launch this project (on electron)

```bash
  npm start
```
