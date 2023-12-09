param (
    [string[]]$tableNames
)

if (!$tableNames) {
    Write-Host "Please provide the table names."
    exit
}

foreach ($tableName in $tableNames) {
    Write-Host "Creating module for $tableName..."
    nest g module $tableName

    Write-Host "Creating entity folder for $tableName..."
    New-Item -Path "$tableName" -Name "entities" -ItemType "directory"

    Write-Host "Creating entity for $tableName..."
    # nest g class "./$tableName/entities/$tableName.entity.ts" --no-spec
    New-Item -Path "$tableName/entities" -Name "$tableName.entity.ts" -ItemType "file"

    Write-Host "Creating DTO folder for $tableName..."
    New-Item -Path "$tableName" -Name "dto" -ItemType "directory"

    Write-Host "Creating DTO files for $tableName..."
    New-Item -Path "$tableName/dto" -Name "create-$tableName.dto.ts" -ItemType "file"
    New-Item -Path "$tableName/dto" -Name "update-$tableName.dto.ts" -ItemType "file"

    Write-Host "Creating service for $tableName..."
    nest g service $tableName

    Write-Host "Creating controller for $tableName..."
    nest g controller $tableName

    Write-Host "Completed all steps for $tableName."
}
