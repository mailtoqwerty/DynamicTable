import sqlstring from 'sqlstring';

// Define the schema object

const schema = {
  tableName: 'users',
  columns: [
    { name: 'id', type: 'int', primaryKey: true },
    { name: 'name', type: 'varchar(255)' },
    { name: 'email', type: 'varchar(255)' },
    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
  ]
};

// Generate the SQL string using sqlstring
const sql = `CREATE TABLE ${schema.tableName} (${schema.columns.map(column => `${column.name} ${column.type}${column.primaryKey ? ' PRIMARY KEY' : ''}${column.default ? ` DEFAULT ${column.default}` : ''}`).join(', ')});`;

// Log the SQL string
console.log(sql);