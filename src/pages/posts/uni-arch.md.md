


> Written with [StackEdit](https://stackedit.io/).

# Uni-Arch

## How does a user view a private page
```mermaid
sequenceDiagram
Alice ->> Private Page: Can I see you?
Private Page ->> UAC: Can Alice see me?
UAC ->> UAC: Alice not in registry
UAC -x Private Page: No
Private Page ->> Alice : You need to buy me first, here
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbODY1Mjg5NjQ1LC0xNTM3MjYyMzQxXX0=
-->