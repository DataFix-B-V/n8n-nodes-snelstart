![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-snelstart

This is a custom node for n8n, a powerful workflow automation tool. It provides an easy way to connect your n8n workflows with **SnelStart**, a widely used accounting and business administration platform. With this node, you can automate tasks involving your financial data, customer records, invoices, and more.

## What can you do with this node?

The **n8n-nodes-snelstart** node acts as a bridge between n8n and the SnelStart API. It enables you to streamline and automate various accounting and administration processes, including:

- Retrieve information about customers, products, invoices, and other financial records.
- Create or update invoices, customers, or other data in SnelStart.
- Synchronize data between SnelStart and other apps or databases.
- Automate bookkeeping workflows such as invoice generation, payment tracking, or updating customer details.

## Developer
![logo](https://raw.githubusercontent.com/DataFix-B-V/n8n-nodes-snelstart/refs/heads/main/images/logoDataFix.png)

This node was created by [DataFix B.V.](https://datafix.nl), a n8n expert partner from the Netherlands.

DataFix supports companies with their implementation of n8n, including node development. If you want to use our services, feel free to reach out. You can contact us through our [site](https://datafix.nl) or by emailing hi@datafix.nl


## Credentials

To use the SnelStart node in n8n, you need two credentials:

- **Client Key (Koppelingssleutel):** Grants access to a specific SnelStart administration.
- **Subscription Key:** Grants access to the SnelStart B2B API.

### 1. Obtain your Client Key

1. Log in to [SnelStart Web](https://web.snelstart.nl/).
2. Open the administration you want to connect to n8n.
3. Navigate to the administration's integration or API connection settings.
4. Create or retrieve a **Koppelingssleutel (Client Key)** for that administration.
5. Copy the key and store it securely.

The Client Key is associated with a specific SnelStart administration. Make sure you generate it for the administration you want to use.

### 2. Obtain your Subscription Key

1. Go to the [SnelStart B2B API Developer Portal](https://b2bapi-developer.snelstart.nl/).
2. Sign in with your SnelStart developer or partner account.
3. Navigate to **Products**.
4. Select your API subscription or subscribe to the appropriate API product if needed.
5. Retrieve your **Subscription Key** and store it securely.

The Subscription Key provides access to the SnelStart B2B API. You need an active API subscription to use it.

### 3. Configure credentials in n8n

1. Open your n8n instance.
2. Add a **SnelStart** node to your workflow.
3. In the **Credential for SnelStart API** field, click **Create New Credential**.
4. Enter your **Client Key** from SnelStart Web.
5. Enter your **Subscription Key** from the SnelStart Developer Portal.
6. Save the credential and select it in your node.

The node handles authentication automatically. It exchanges the Client Key for a bearer token and uses the Subscription Key when communicating with the SnelStart API.

You do not need to manually generate an access token.

For additional information, see the [SnelStart B2B API Developer Portal](https://b2bapi-developer.snelstart.nl/).

## Example: Get Many Relations

This example demonstrates how to retrieve relations (customers and suppliers) from your SnelStart administration using n8n.

### Step 1: Add the SnelStart node

1. Open an existing workflow or create a new workflow in n8n.
2. Add the **SnelStart** node.
3. Select the SnelStart API credential you configured above.

### Step 2: Configure the operation

Configure the node using the following settings:

| Setting | Value |
|---------|-------|
| Resource | Relations |
| Operation | Get Many Relations |
| Return All | Disabled (false) |
| Options → Top | 10 |
| Options → Skip | 0 |

This configuration retrieves up to 10 relations from your SnelStart administration.

To retrieve all available relations, enable **Return All**.

### Step 3: Execute the node

1. Click **Execute step**.
2. The node sends a request to the SnelStart B2B API.
3. The retrieved relations appear in the node's output panel.

The corresponding API request is:

```http
GET https://b2bapi.snelstart.nl/v2/relaties?$top=10&$skip=0
```

Authentication is handled automatically by the node.

### Step 4: View the results

The node returns relation records from your SnelStart administration.

For example, a simplified response could look like this:

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "naam": "Example Company B.V.",
    "relatiecode": 1001,
    "email": "info@example.com",
    "relatiesoort": ["Klant"]
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "naam": "Example Supplier B.V.",
    "relatiecode": 1002,
    "email": "supplier@example.com",
    "relatiesoort": ["Leverancier"]
  }
]
```

**Note:** This is illustrative data. The actual output depends on the relations stored in your SnelStart administration.

### Optional: Filter relations

You can also use OData filters to retrieve specific relations.

1. Open the SnelStart node.
2. Under **Options**, select **Add Option → Filter**.
3. Enter an OData filter expression supported by the SnelStart API.
4. Execute the node again.

For more information about filtering and pagination, see the [SnelStart B2B API documentation](https://b2bapi-developer.snelstart.nl/apidocumentatie).


## More information

Refer to the [documentation on installing nodes](https://docs.n8n.io/integrations/community-nodes/installation/) for detailed information on installing custom nodes.

Refer to the [documentation on creating nodes](https://docs.n8n.io/integrations/creating-nodes/) for detailed information on building your own nodes.

## License

[MIT](https://github.com/DataFix-B-V/n8n-nodes-snelstart/blob/main/LICENSE.md)
