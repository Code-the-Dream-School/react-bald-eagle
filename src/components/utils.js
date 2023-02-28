export const addTableData = async (tableName, newFields) => {
    const res = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            ...newFields,
                        },
                    },
                ],
            }),
        }
    );
    const data = await res.json();
    return data;
};