// Every UCI device whether it be hardware or strictly software device has in common
// A means of communication to other devices whether they be on the same machine host, across a network or even within itself
// To

import EventEmitter from 'events'
import IPC from 'node-ipc/services/IPC'
import aggregate from 'aggregation/es6'

console.log(IPC)


export default class Device extends aggregate(EventEmitter,IPC) {
  constructor(id, opts) {
    super()
    this.id = id  //must be unique in entire messaging system
    if (opts) {
      this.transports = opts.transports
    }
  }

  async init() {}

  async listen(message) {
    console.log(message)
  }

  async send(message) {
    console.log(message)
  }

}

// # dc|intra|native|unix|tcp|mqtt
// # dc = direct call without messaging.
// # intra = within same process (standard node event emitter)
// # native = node child process using pipes
// # unix = unix socket on same host/machine
// # tcp = using
// # tls = secure TCP
// # udp
// # mqtt
