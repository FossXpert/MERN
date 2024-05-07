## solving username problem

## How Grids are used , and to implement MUI

## Biggest Challenge is how to identify between instructer and user.
- Can we use diff token , or same token is used.
- One thing (First learn react router, and how it can use to protect routes)

## Routing in react (Very Important)
## Lot of issue faced while choosing the type of onchange
```typescript
    <Select
    fullWidth
    id="Category"
    label="Category"
    variant="outlined"
    value={category}
    onChange={(e: React.ChangeEvent<{ value: string }>) => { setCategory(e.target.value) }}
    >
    <MenuItem value="code">Code</MenuItem>
    <MenuItem value="design">Design</MenuItem>
    <MenuItem value="architect">Architect</MenuItem>
    </Select>
```
## 