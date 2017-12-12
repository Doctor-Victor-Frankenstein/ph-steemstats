SELECT Accounts.name
      , substring(substring(Accounts.json_metadata,charindex('location',Accounts.json_metadata)+13,100),0,charindex('\',substring(Accounts.json_metadata,charindex('location',Accounts.json_metadata)+13,100)))  as location_string
      , Accounts.created
      , Accounts.last_vote_time
FROM Accounts (NOLOCK)
WHERE Accounts.json_metadata like '%philippines%' AND
     Accounts.created > dateadd(day, -30, getdate())
ORDER BY Accounts.created DESC;