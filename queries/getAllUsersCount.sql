SELECT 
   Accounts.name
FROM Accounts (NOLOCK)
WHERE Accounts.json_metadata like '%philippines%'