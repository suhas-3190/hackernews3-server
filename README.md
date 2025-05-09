# Hacker News

```prisma
model User{
    name String?
    username String @id @unique
    liked boolean

    userId String
    user user @relation(references )
} 
```
```prisma
model post{
    id string @id @default(uuid())
    text string
}

```
``` prisma
model like {
 id String @id @default(uuid())
 text string
}
/posts - [
    {
        id:"dkdkd"
        text:"dkdkd"
        user:
        {
            id:"dkdkd"
            username:"kabir"
        }
    }
]
```

- Soft Delete
-data warehousing
- optimistic updates
- enrichment | feildes | join quieries
- pagnation | offset  cursor
- sharding | Integer vs UUID primary keys
- parallel hits by using Promise.all()



