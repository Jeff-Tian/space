


> Written with [StackEdit](https://stackedit.io/).

# Uni-Arch

## How does a user view a private page
```mermaid
sequenceDiagram
Alice ->> Private Page: Can I see you?
Private Page ->> UAC: Can Alice see me?
UAC ->> UAC: Alice not in registry
UAC -x Private Page: No
Private Page ->> Alice : You need to buy me first, here is the link for purchase
Alice ->> Uni Order: Please create an order for me
Uni Order ->> Uni Order: Order created, waiting for payment

```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgwMDUyMjQxOCwtMTUzNzI2MjM0MV19
-->