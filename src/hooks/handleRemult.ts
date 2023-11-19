import { remultSveltekit } from 'remult/remult-sveltekit'
import { Task } from '../shared/Task' 
import { createPostgresDataProvider } from 'remult/postgres'
import { DATABASE_URL } from '$env/static/private' 

export const handleRemult = remultSveltekit({
  entities: [Task], 
  dataProvider: DATABASE_URL ? createPostgresDataProvider({ connectionString: DATABASE_URL }) : undefined,
})