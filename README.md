# lushan-export-to-csv

You can export records stored in the Mongo DB, to a CSV file. 

### Installation

`npm i lushan-export-to-csv`

### Usage

`const csv = require(‘lushan-export-to-csv’);`

Example:

csv.exportCsv(EntityName, Headers, Cursor, BaseUrl, DestinationFolder)

### Parameters

- EntityName : name of the entity you want to export. This will be used to generate the file name. For example citizens, companies, etc. (Type: String)

- Headers : will be used as a column heading. (Type: String)

- Cursor : 

- BaseUrl : 

- DestinationFolder : 
