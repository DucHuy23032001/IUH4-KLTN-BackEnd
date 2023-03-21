# IUH4-KLTN-BackEnd
## [Github](https://github.com/DucHuy23032001/IUH41-CNM-BackEnd-MeChat)

## **Auth**
- SignIn
    - Api: **POST**: https://ptask.cyclic.app/api/v1/auths/sign-in
    - Request:
    ```json
    {
        "email":"123@gmail.com",
        "password":"123456"
    }
    ```
    - Reponse:
    ```json
    {
        "msg": "Success",
        "accountId": "6406b883e37a41dce48544d5",
        "userId": "63f47b681e6c6175bf4ce69c",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjQ3YjY4MWU2YzYxNzViZjRjZTY5YyIsImlhdCI6MTY3ODE2MjcxNywiZXhwIjoxNjc4MTYzMzE3fQ.BHf4pcM4o11Rrm4UCJAUSDCgpJvvbOA6MJdhxXef78I"
    }
    ```
- SignUp
    - Api: **POST**: https://ptask.cyclic.app/api/v1/auths/sign-up
    - Request:
    ```json
    {
        "email":"123@gmail.com",
        "password":"1234",
        "confirmPassword":"1234",
        "fullName":"ABC",
        "birthday":"02/14/2023",
        "address":"TP HCM",
        "phoneNumber":"0879276284",
        "gender": 0,
        "avatarImage":"https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png"
    }
    ```
    - Reponse:
    ```json
    {
        "accountId": "6406bbb97a58b596f51d393a",
        "userId": "6406bbb97a58b596f51d393c",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDZiYmI5N2E1OGI1OTZmNTFkMzkzYyIsImlhdCI6MTY3ODE2Mjg3MywiZXhwIjoxNjc4MTYzNDczfQ.VrEbYoHAOVnlGgKIhBZjZvajaUOWAFLat-xxhTEotMg"
    }
    ```
## **Account**

- getAllCount
    - Api: **GET**:  https://ptask.cyclic.app/api/v1/accounts    
    - Reponse:
    ```json
    [
        "63f47b681e6c6175bf4ce69a",
        "63f481f55f6bee2a60d910e9"
    ]
    ```
- getAccountById
    - Api: **GET**:  https://ptask.cyclic.app/api/v1/accounts/:id
    - Reponse
    ```json
    {
        "id": "63f47b681e6c6175bf4ce69a",
        "email": "12345@gmail.com",
        "password": "$2b$10$R4sZ9QAGSYQ9L68dYZ44Le7J.SVe76Q53OGkUtV28wleX//OXv/2."
    }
    ```
- getAccountByEmail
    - Api: **GET**:  https://ptask.cyclic.app/api/v1/accounts/email/:email
    - Reponse
    ```json
    {
        "id": "63f47b681e6c6175bf4ce69a",
        "email": "12345@gmail.com",
        "password": "$2b$10$R4sZ9QAGSYQ9L68dYZ44Le7J.SVe76Q53OGkUtV28wleX//OXv/2."
    }
    ```
- changePassword
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/accounts/change-password/:id
    - Request
    ```json
    {
        "password":"1234",
        "newPassword":"123456",
        "confirm":"123456"
    }
    ```
    - Reponse
    ```json
    {
        "id": "6406b883e37a41dce48544d5",
        "status": "Success"
    }
    ```
- forgetPassword
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/accounts/forget-password
    - Request
    ```json
    {
        "email":"123@gmail.com",
        "newPassword":"123456",
        "confirm":"123456"
    }
    ```
    - Reponse
    ```json
    {
        "id": "6406b883e37a41dce48544d5",
        "status": "Success"
    }
    ```
## **User**
- getAllUser
    - Api: **Get**:    https://ptask.cyclic.app/api/v1/users/
    - Reponse
    ```json
    {
        "status": "Success",
        "data": [
            "63f47b681e6c6175bf4ce69c",
            "63f481f55f6bee2a60d910eb",
            "6406b883e37a41dce48544d7",
            "6406bbb97a58b596f51d393c"
        ]
    }
    ```
- getUserById
    - Api: **Get**:    https://ptask.cyclic.app/api/v1/users/63f47b681e6c6175bf4ce69c
    - Reponse
    ```json
    {
            "_id": "63f47b681e6c6175bf4ce69c",
            "fullName": "Huy 111",
            "birthday": "2023-02-13T17:00:00.000Z",
            "address": "TP HCM",
            "phoneNumber": 879276284,
            "gender": false,
            "avatar": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png",
            "status": false,
            "accountId": "63f47b681e6c6175bf4ce69a"
    }
    ```
- getUserByEmail
    - Api: **Get**:    https://ptask.cyclic.app/api/v1/users/email/12345@gmail.com
    - Reponse
    ```json
    {
            "_id": "63f47b681e6c6175bf4ce69c",
            "fullName": "Huy 111",
            "birthday": "2023-02-13T17:00:00.000Z",
            "address": "TP HCM",
            "phoneNumber": 879276284,
            "gender": false,
            "avatar": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png",
            "status": false,
            "accountId": "63f47b681e6c6175bf4ce69a"
    }
    ```
- getUserByName
    - Api: **Get**:    https://ptask.cyclic.app/api/v1/users/email/ABC
    - Reponse
    ```json
    {
        [
            {
                "_id": "63f481f55f6bee2a60d910eb",
                "fullName": "ABC",
                "birthday": "2023-02-13T17:00:00.000Z",
                "address": "TP HCM",
                "phoneNumber": 879276284,
                "gender": false,
                "status": true,
                "avatar": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png",
                "accountId": "63f481f55f6bee2a60d910e9",
                "__v": 0
            },
            {
                "_id": "6406b883e37a41dce48544d7",
                "fullName": "ABC",
                "birthday": "2023-02-13T17:00:00.000Z",
                "address": "TP HCM",
                "phoneNumber": 879276284,
                "gender": false,
                "status": true,
                "avatar": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png",
                "accountId": "6406b883e37a41dce48544d5",
                "__v": 0
            }
        ]
    }
    ```
- getUserByPhone
    - Api: **Get**:    https://ptask.cyclic.app/api/v1/users/phone/879276284
    - Reponse
    ```json
    {
        {
            "_id": "63f47b681e6c6175bf4ce69c",
            "fullName": "Huy 111",
            "birthday": "2023-02-13T17:00:00.000Z",
            "address": "TP HCM",
            "phoneNumber": 879276284,
            "gender": false,
            "avatar": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png",
            "status": false,
            "accountId": "63f47b681e6c6175bf4ce69a"
        }
    }
    ```
- updateUser:
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/users/update/63f47b681e6c6175bf4ce69c
    - Request
    ```json
    {
        "fullName":"Huy 111",
        "birthday":"02/14/2023",
        "address":"TP HCM",
        "phoneNumber":"0879276284",
        "gender": 0,
        "avatarImage":"https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png"
    }
    ```
    - Reponse
    ```json
    {
        "_id": "63f47b681e6c6175bf4ce69c",
        "fullName": "Huy 111",
        "birthday": "2023-02-13T17:00:00.000Z",
        "address": "TP HCM",
        "phoneNumber": 879276284,
        "gender": false,
        "status": true,
        "avatar": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png",
        "accountId": "63f47b681e6c6175bf4ce69a",
        "__v": 0
    }
    ```
- lockUser:
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/users/lock/63f47b681e6c6175bf4ce69c
    - Reponse
    ```json
    {
        "_id": "63f47b681e6c6175bf4ce69c",
        "fullName": "Huy 111",
        "birthday": "2023-02-13T17:00:00.000Z",
        "address": "TP HCM",
        "phoneNumber": 879276284,
        "gender": false,
        "status": false,
        "avatar": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatar-nam.png",
        "accountId": "63f47b681e6c6175bf4ce69a",
        "__v": 0
    }
    ```
## Role
- getAllRolesOfUser:
    - Api: **GET**:    https://ptask.cyclic.app/api/v1/roles/63f47b681e6c6175bf4ce69c
    - Reponse
    ```json
    [
        {
            "_id": "63f4806dc4ec61b3edc26f6e",
            "name": "Name 1",
            "members": [
                "63f47b681e6c6175bf4ce69c"
            ],
            "__v": 2
        }
    ]
    ```
- createRole:
    - Api: **POST**:    https://ptask.cyclic.app/api/v1/roles/create
    - Request
    ```json
    {
        "name":"name",
        "members":["63f47b681e6c6175bf4ce69c"]
    }
    ```
    - Reponse
    ```json
    {
        "name": "name",
        "members": [
            "63f47b681e6c6175bf4ce69c"
        ],
        "_id": "6406e3d3aaa26ea50d253f4f",
        "__v": 0
    }
    ```
- changeNameRole:
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/roles/change-name/63f4806dc4ec61b3edc26f6e
    - Request
    ```json
    {
        "name":"Name 1"
    }
    ```
    - Reponse
    ```json
    {
        "_id": "63f4806dc4ec61b3edc26f6e",
        "name": "Name 1",
        "members": [
            "63f47b681e6c6175bf4ce69c"
        ],
        "__v": 2
    }
- addMembersRole: **Đang có bug**
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/roles/add-member/63f4806dc4ec61b3edc26f6e
    - Request
    ```json
    {
        "memberIds":["63f481f55f6bee2a60d910eb","63f47b681e6c6175bf4ce69c"]
    }
    ```
    - Reponse
    ```json
    {
        "_id": "63f4806dc4ec61b3edc26f6e",
        "name": "Name 1",
        "members": [
            "63f47b681e6c6175bf4ce69c"
        ],
        "__v": 2
    }
    ```

- removeMemberRole: 
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/roles/remove-member/63f4806dc4ec61b3edc26f6e
    - Request
    ```json
    {
        "memberId":"63f481f55f6bee2a60d910eb"
    }
    ```
    - Reponse
    ```json
    {
        "role": {
            "_id": "63f4806dc4ec61b3edc26f6e",
            "name": "Name 1",
            "members": [],
            "__v": 3
        },
        "memberId": "63f47b681e6c6175bf4ce69c"
    }
    ```
## Project
- getAllProject
    - Api: **GET**:    https://ptask.cyclic.app/api/v1/projects
    - Reponse
    ```json
    [
        {
            "_id": "63f4836e4986d4991247715a",
            "name": "name",
            "startTime": "2001-03-22T17:00:00.000Z",
            "finishTime": "2100-03-22T17:00:00.000Z",
            "status": true,
            "roleIds": [],
            "__v": 0
        },
        {
            "_id": "63f483964986d4991247715c",
            "name": "name",
            "startTime": "2001-03-22T17:00:00.000Z",
            "finishTime": "2100-03-22T17:00:00.000Z",
            "status": true,
            "roleIds": [],
            "__v": 0
        }
    ]
    ```
- createProject
    - Api: **POST**:    https://ptask.cyclic.app/api/v1/projects/create
    - Request
    ```json
    {
        "name":"name 2",
        "startTime" :"03-23-2001",
        "finishTime" : "03-23-2100",
        "roleIds":["63f4806dc4ec61b3edc26f6e"]
    }
    ```
    - Reponse
    ```json
    {
        "name": "name 2",
        "startTime": "2001-03-22T17:00:00.000Z",
        "finishTime": "2100-03-22T17:00:00.000Z",
        "status": true,
        "roleIds": [
            "63f4806dc4ec61b3edc26f6e"
        ],
        "_id": "640742ff008ad2abde987c52",
        "__v": 0
    }
    ```
- getProjectById:
    - Api: **GET**:    https://ptask.cyclic.app/api/v1/projects/63f485974bad526b718962a5
    - Reponse
    ```json
    {
        "_id": "63f4836e4986d4991247715a",
        "name": "name",
        "startTime": "2001-03-22T17:00:00.000Z",
        "finishTime": "2100-03-22T17:00:00.000Z",
        "status": true,
        "roleIds": [],
        "__v": 0
    }
    ```
- getProjectByName:
    - Api: **GET**:    https://ptask.cyclic.app/api/v1/projects/name/name ***(:name)***
    - Reponse
    ```json
    [
        {
            "_id": "63f4836e4986d4991247715a",
            "name": "name",
            "startTime": "2001-03-22T17:00:00.000Z",
            "finishTime": "2100-03-22T17:00:00.000Z",
            "status": true,
            "roleIds": [],
            "__v": 0
        },
        {
            "_id": "63f483964986d4991247715c",
            "name": "name",
            "startTime": "2001-03-22T17:00:00.000Z",
            "finishTime": "2100-03-22T17:00:00.000Z",
            "status": true,
            "roleIds": [],
            "__v": 0
        }
    ]
    ```
## Work
- getAllWorkByProjectId:
    - Api: **GET**:    hhttps://ptask.cyclic.app/api/v1/works/63f4836e4986d4991247715a
    - Reponse
    ```json
    [
        {
            "_id": "6407447d95b5b542e6bc7e0d",
            "name": "name 2",
            "status": false,
            "projectId": "63f4836e4986d4991247715a",
            "__v": 0
        },
        {
            "_id": "6407448095b5b542e6bc7e0f",
            "name": "name 2",
            "status": false,
            "projectId": "63f4836e4986d4991247715a",
            "__v": 0
        },
        {
            "_id": "6407448195b5b542e6bc7e11",
            "name": "name 2",
            "status": false,
            "projectId": "63f4836e4986d4991247715a",
            "__v": 0
        }
    ]
    ```
- createWork
    - Api: **PATCH**:    https://ptask.cyclic.app/api/v1/works/change-name/6407447d95b5b542e6bc7e0d
    - Request
    ```json
    {
        "name":"test"
    }
    ```
    - Reponse
    ```json
    {
        "_id": "6407447d95b5b542e6bc7e0d",
        "name": "test",
        "status": false,
        "projectId": "63f4836e4986d4991247715a",
        "__v": 0
    }
    ```
## Task
- createTask
    - Api: **POST**:    https://ptask.cyclic.app/api/v1/tasks/
    - Request
    ```json
    {
        "name":"name",
        "startDay":"03-23-2001",
        "finishDay":"03-23-20100",
        "startHour":"9:00",
        "finishHour":"16:00",
        "linkSupport":"ABC",
        "imageLink":"ABC",
        "listId":"63f48728f071ef7be2a9e9bd",
        "members":["63f47b681e6c6175bf4ce69c","63f481f55f6bee2a60d910eb"]
    }
    ```
    - Reponse
    ```json
    {
        "name": "name",
        "startDay": "2001-03-22T17:00:00.000Z",
        "finishDay": "2010-03-22T17:00:00.000Z",
        "startHour": "9:00",
        "finishHour": "16:00",
        "imageLink": "ABC",
        "listId": "63f48728f071ef7be2a9e9bd",
        "members": [
            "63f47b681e6c6175bf4ce69c",
            "63f481f55f6bee2a60d910eb"
        ],
        "status": 3,
        "_id": "640745aa372921bca42eae22",
        "linkSupports": [],
        "__v": 0
    }
    ```
- getAllTaskInList 
    - Api: **GET**:    https://ptask.cyclic.app/api/v1/tasks/get-task-in-list/63f48728f071ef7be2a9e9bd
    - Reponse
    ```json
    [
        {
            "status": 3,
            "_id": "63f48c86c765a223ecb74b8e",
            "name": "name",
            "startDay": "2001-03-22T17:00:00.000Z",
            "finishDay": "2010-03-22T17:00:00.000Z",
            "startHour": "9:00",
            "finishHour": "16:00",
            "imageLink": "ABC",
            "listId": "63f48728f071ef7be2a9e9bd",
            "members": [
                "63f47b681e6c6175bf4ce69c",
                "63f481f55f6bee2a60d910eb"
            ],
            "linkSupports": [],
            "__v": 0
        },
        {
            "_id": "640745aa372921bca42eae22",
            "name": "name",
            "startDay": "2001-03-22T17:00:00.000Z",
            "finishDay": "2010-03-22T17:00:00.000Z",
            "startHour": "9:00",
            "finishHour": "16:00",
            "imageLink": "ABC",
            "listId": "63f48728f071ef7be2a9e9bd",
            "members": [
                "63f47b681e6c6175bf4ce69c",
                "63f481f55f6bee2a60d910eb"
            ],
            "status": 3,
            "linkSupports": [],
            "__v": 0
        }
    ]
    ```
- getTaskById
    - Api: **GET**:    https://ptask.cyclic.app/api/v1/tasks/63f48c86c765a223ecb74b8e
    - Reponse
    ```json
    {
        "status": 3,
        "_id": "63f48c86c765a223ecb74b8e",
        "name": "name",
        "startDay": "2001-03-22T17:00:00.000Z",
        "finishDay": "2010-03-22T17:00:00.000Z",
        "startHour": "9:00",
        "finishHour": "16:00",
        "imageLink": "ABC",
        "listId": "63f48728f071ef7be2a9e9bd",
        "members": [
            "63f47b681e6c6175bf4ce69c",
            "63f481f55f6bee2a60d910eb"
        ],
        "linkSupports": [],
        "__v": 0
    }
    ```
- getTaskByName:
    - Api: **GET**:    https://ptask.cyclic.app/api/v1/tasks/name/name ***(:name)***
    - Reponse
    ```json
    [
        {
            "status": 3,
            "_id": "63f48c86c765a223ecb74b8e",
            "name": "name",
            "startDay": "2001-03-22T17:00:00.000Z",
            "finishDay": "2010-03-22T17:00:00.000Z",
            "startHour": "9:00",
            "finishHour": "16:00",
            "imageLink": "ABC",
            "listId": "63f48728f071ef7be2a9e9bd",
            "members": [
                "63f47b681e6c6175bf4ce69c",
                "63f481f55f6bee2a60d910eb"
            ],
            "linkSupports": [],
            "__v": 0
        },
        {
            "_id": "640745aa372921bca42eae22",
            "name": "name",
            "startDay": "2001-03-22T17:00:00.000Z",
            "finishDay": "2010-03-22T17:00:00.000Z",
            "startHour": "9:00",
            "finishHour": "16:00",
            "imageLink": "ABC",
            "listId": "63f48728f071ef7be2a9e9bd",
            "members": [
                "63f47b681e6c6175bf4ce69c",
                "63f481f55f6bee2a60d910eb"
            ],
            "status": 3,
            "linkSupports": [],
            "__v": 0
        }
    ]
    ```