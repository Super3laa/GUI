import React from 'react'
import danger from '../../assets/images/signs/danger.png'
import stop from '../../assets/images/signs/stop.png'
import speedlimit from '../../assets/images/signs/speedLimit.png'
import noOverTaking from '../../assets/images/signs/noOverTaking.png'
import pedestrian from '../../assets/images/signs/pedestrain.png'
const signs = new Map();

signs.set("stop",stop)
signs.set("Speed limit (60km/h)",speedlimit)
signs.set("danger",danger)
signs.set("no overtaking",noOverTaking)
signs.set("pedestrian crossing",pedestrian)

export default signs;