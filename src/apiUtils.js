// action: A string representing the action to be performed (fetch, add, delete)
// fields: An object containing fields for adding a new todo item
// id: A string representing the id of the todo item to be deleted
// key: A string representing the Airtable API key

export default async function fetchApiData(action, fields, id, key) {
    let url = `${process.env.REACT_APP_AIRTABLE_API_URL}/` +
        `${process.env.REACT_APP_AIRTABLE_BASE_ID}/` +
        `${process.env.REACT_APP_AIRTABLE_TABLE_NAME}`;

    let method, body;

    switch (action) {
        case 'fetch':
            method = 'GET';
            body = null;
            break;
        case 'add':
            method = 'POST';
            body = JSON.stringify({ fields });
            break;
        case 'delete':
            method = 'DELETE';
            url += `/${id}`;
            body = null;
            break;
        default:
            throw new Error('Invalid action');
    }

    const options = {
        method,
        headers: {
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
        },
        body,
    };

    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Failed to ${action} todo item in Airtable`);
    }
    return data;
}
