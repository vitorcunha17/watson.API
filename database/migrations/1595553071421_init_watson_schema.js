'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InitWatsonSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments();
      table.string("comment");
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = InitWatsonSchema
