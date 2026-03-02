"use client"

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function WhatsAppBot() {
  return (
    <div>
        <FloatingWhatsApp phoneNumber='+2348029892604' chatMessage='Hello There! We are online, Send us a chat now!' accountName='KampressGPS' avatar='/favicon.ico'/>
    </div>
  )
}

export default WhatsAppBot