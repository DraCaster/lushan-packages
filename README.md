# lushan-export-to-csv

You can export records stored in the Mongo DB, to a CSV file.

### Installation

```js

npm i lushan-export-to-csv

```

### Usage

```js

const csv = require(‘lushan-export-to-csv’);

```

### Methods:

```js

exportCsv()

```

### Definition and usage:

_Allows you to generate a csv batch. This method returns the download link of the generated file_

### Syntax

```js

csv.exportCsv(EntityName, Headers, Cursor, BaseUrl, DestinationFolder)

```

### Parameters values

- **EntityName** : Required. Name of the entity you want to export. This will be used to generate the file name. For example citizens, companies, etc. (Type: String)

- **Headers** : Required. Will be used as a column heading. (Type: Array)

- **Cursor** : Required. A pointer to the result set of a query. Will be used to generate the batch. More information about cursors in MongoDB: https://docs.mongodb.com/manual/reference/glossary/#term-cursor

- **BaseUrl** : Required. API base Url (Type: String)

- **DestinationFolder** : Required. Destination folder where the csv is generated. This folder must exist in your project. (Type: String)

### Example

```js

const csv = require(‘lushan-export-to-csv’);

const headers = ['name','telephone']

const baseUrl = "YOUR_API_URL"


/*This is an example of how you can get a cursor in MongoDB_
In this example I want to filter on my people collection, and get certain fields*/

//queryFilters: filters to apply
//headers: I return the fields that I require to generate my csv (These will be the headers in my batch file)

let cursor = await people.find(queryFilters, headers).cursor()

csv.exportCsv('My-Company', headers, cursor, baseUrl, 'batches')

```
