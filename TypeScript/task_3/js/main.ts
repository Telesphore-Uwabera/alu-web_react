// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row); // Insert row {firstName: "Guillaume", lastName: "Salva"}

// Update the row with an age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow); // Update row {RowID} {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete the row using the RowID
CRUD.deleteRow(newRowID); // Delete row id {RowID}
