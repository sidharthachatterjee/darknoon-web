---
layout: post
title: Wrapping C++ Final Edition
date: 2012-5-29T14:30:00-09:00
link: http://robnapier.net/blog/wrapping-cppfinal-edition-759
---

I deal with C++ somewhat regularly, and it's way easier to integrate with Objective-C code it used to be.

> Improvements in Objective-C have made all of the previous hoop-jumping irrelevant. The problem all my previous solutions was trying to solve was that you had to declare ivars in the header. Your ivar was a C++ class (which might be in a namespace or might be a template), and that made it difficult to declare in the header without forcing all the importers to be ObjC++. So to solve this generally you needed opaque types, or at the very least forward declared structs, etc. And it was all a big pain.

> But that's over. You can now declare all your ivars in the implementation file. So everything's easy. Your wrapper class can have C++ ivars without having any impact on users of the wrapper class.

Love it when Apple makes our lives easier.
