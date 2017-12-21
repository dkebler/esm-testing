'use strict'

// **********************************

class Device {
  // bus is i2c-bus bus object
  constructor(bus, address, opts) {
    this.bus = bus
    this.address = address
    if (opts) {
      this.id = opts.id // must be unique within a bus
      this.desc = opts.desc
      this.channel = opts.channel  // if using TAC9546A channel number on which device is attached
    }
  }

  async _setChannel() {
    // console.log('before set',this.address,this.id,this.channel, this.bus.getState)
    if (this.channel) {
      if (!this.bus.address) { return Promise.reject('Channel set but no mux on bus')}
      return this.bus.set(this.channel)
    }
    return Promise.resolve()  // no channel for device either no mux or device is attached to mux bypass
  }

  // for devices that need just a simple send of a byte without a register command
  async receive() {
    await this._setChannel()
    return this.bus.receive(this.address)
  }

  async send(cmd, byte) {
    await this._setChannel()
    return this.bus.send(this.address, cmd, byte)
  }

  // for devices needing a buffer/stream
  async readRaw(length, buffer) {
    await this._setChannel()
    return this.bus.readRaw(this.address, length, buffer)
  }

  async writeRaw(length, buffer) {
    await this._setChannel()
    return this.bus.writeRaw(this.address, length, buffer)
  }

  // both cmd and byte should be a single byte as a decimal or hex
  async read(cmd) {
    await this._setChannel()
    // console.log('after set before read',this.address,this.id,this.channel,this.bus.getState)
    return this.bus.read(this.address, cmd)
  }

  async write(cmd, byte) {
    await this._setChannel()
    // console.log('after set, before write',this.address,this.id,this.channel,this.bus.getState)
    return this.bus.write(this.address, cmd, byte)
  }

  // for I2C devices that use a word length packackage
  async read2(cmd) {
    await this._setChannel()
    return this.bus.read2(this.address, cmd)
  }

  async write2(cmd, bytes) {
    await this._setChannel()
    return this.bus.write2(this.address, cmd, bytes)
  }

}

module.exports = {
  Device
}
