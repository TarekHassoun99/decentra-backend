# Prompting user for the port number
$port = Read-Host "Please enter the port number you want to kill processes for"

# Checking if the entered port number is valid
if (![int]::TryParse($port, [ref]0)) {
    Write-Host "Invalid port number. Please enter a valid integer."
    exit
}

# Killing all processes related to the specified port
Get-NetTCPConnection -LocalPort $port | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

Write-Host "All processes running on port $port have been terminated."
