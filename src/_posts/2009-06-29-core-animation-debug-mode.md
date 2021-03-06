---
layout: post
title: Core Animation debug mode
---

If you're into optimizing scrolling or drawing performance on the iPhone, then you know that blended layers (ie, non-opaque) can really slow things down. Sometimes it's hard to know what is opaque and what is being blended, however.

The good news is that there is a tool for this! You can easily get a visual readout of all of the layers in your app and their blending. Here is an example:

<a href="images/old/2009/06/debugmode-1.png"><img class="alignnone size-medium wp-image-65" title="debugmode-1" src="images/old/2009/06/debugmode-1-266x400.png" alt="" width="266" height="400" /></a>

The red areas are being blended, whereas the green areas are totally opaque, giving the best performance.

Here's how to set it up:

##Debug Mode On-Device

Open up the Instruments tool, and select an iPhone or iPod touch as the applicable device, then add a new Core Animation instrument.

<a href="images/old/2009/06/system.png"><img class="alignnone size-medium wp-image-62" title="system" src="images/old/2009/06/system.png" alt="" width="263" height="306" /></a>

You'll then need to show Detail (View > Detail, or the button in the bottom bar). Then there is a checkbox for "Color blended layers." This is what you want.

<a href="images/old/2009/06/instruments-1.png"><img class="alignnone size-medium wp-image-63" title="Color Blended Layers checkbox" src="images/old/2009/06/instruments-1.png" alt="" width="363" height="323" /></a>

Your iPhone or iPod Touch should now switch into red-green mode. This setting is persistent, so you can detach your phone and use it now. To disable, attach to Instruments again and uncheck the box or restart the phone.

##Debug Mode in Simulator

Turns out, there is an easier way! You can do all of this fun in the simulator. <strike>Just launch it with the `CA_COLOR_OPAQUE` environment variable set:</strike>

<strike>`CA_COLOR_OPAQUE=1 /Developer/Platforms/iPhoneSimulator.platform/Developer/Applications/iPhone\ Simulator.app/Contents/MacOS/iPhone\ Simulator`</strike>

<div class="updated">

##Xcode 4.2 Update

_If you're running this version of Xcode, you can enable these options directly in the simulator application._

![alt text](images/core-animation-debug-mode/new-simulator-option.png)

</div>

<a href="images/old/2009/06/iphone-simulator-1.png"><img class="alignnone size-medium wp-image-66" title="iphone-simulator-1" src="images/old/2009/06/iphone-simulator-1-215x399.png" alt="" width="215" height="399" /></a>

And, boom! You can now run your apps as usual using Xcode and they'll show up in the simulator with color blended layers enabled. To disable it, just quit and relaunch Simulator.
