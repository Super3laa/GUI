import {colors} from '../../assets/colors';
import {MdDirectionsBike,MdTraffic} from 'react-icons/md';
import {IoMdCar,IoMdWalk} from 'react-icons/io'
import React from 'react';

const objects = new Map();

objects.set('biker',{icon:<MdDirectionsBike/>,color:colors.inActive})
objects.set('vehicle',{icon:<IoMdCar/>,color:colors.inActive})
objects.set('pedestrian',{icon:<IoMdWalk/>,color:colors.inActive})
objects.set('traffic_light',{icon:<MdTraffic/>,color:colors.inActive})

export default function updateObjects(activeObjets){
    activeObjets.map(name=>{
        objects.set(name,{icon:objects.get(name).icon,color:colors.active});
    })
    return objects;
}