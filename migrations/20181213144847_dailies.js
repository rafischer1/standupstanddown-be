exports.up = (knex, Promise) => {
  return knex.schema.createTable('dailies', (table) => {
  table.increments() // This is the id, auto-increments
  table.string('yesterday', 255).notNullable().defaultTo('')
  table.string('today', 255).notNullable().defaultTo('')
  table.string('helps', 255).notNullable().defaultTo('')
  table.integer('user_id').notNullable()
  table.foreign(`user_id`).references(`users.id`).onDelete(`CASCADE`)
  table.integer('sprint_id').notNullable()
  table.foreign(`sprint_id`).references(`sprint.id`).onDelete(`CASCADE`)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('dailies')
