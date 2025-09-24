async function singleQuote() {
    // Plain
    console.log('Hello')
    // Unicode Escape/UTF-8
    console.log('\u0048\u0065\u006c\u006c\u006f') 
    console.log('\u0048\u0065\u006c\u006c\u006f\u000a')
    console.log('U+0048 U+0065 U+006C U+006C U+006F')
    console.log('\u0048\u0065\u006C\u006C\u006F')
    console.log('\u{48}\u{65}\u{6C}\u{6C}\u{6F}')
    console.log('\x{48}\x{65}\x{6C}\x{6C}\x{6F}')
    console.log('\x48\x65\x6C\x6C\x6f')
    console.log('\48\65\6C\6C\6F')
    console.log('&#x48;&#x65;&#x6C;&#x6C;&#x6F;')
    console.log('%u0048%u0065%u006C%u006C%u006F')
    console.log('0x48 0x65 0x6C 0x6C 0x6F')
    console.log('\N{LATIN CAPITAL LETTER H}\N{LATIN SMALL LETTER E}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER O}')
    // ASCII
    console.log('&#72;&#101;&#108;&#108;&#111;')
}

async function doubleQuote() {
    // Plain
    console.log("Hello")
    // Unicode Escape/UTF-8
    console.log("\u0048\u0065\u006c\u006c\u006f") 
    console.log("\u0048\u0065\u006c\u006c\u006f\u000a")
    console.log("U+0048 U+0065 U+006C U+006C U+006F")
    console.log("\u0048\u0065\u006C\u006C\u006F")
    console.log("\u{48}\u{65}\u{6C}\u{6C}\u{6F}")
    console.log("\x{48}\x{65}\x{6C}\x{6C}\x{6F}")
    console.log("\x48\x65\x6C\x6C\x6f")
    console.log("\48\65\6C\6C\6F")
    console.log("&#x48;&#x65;&#x6C;&#x6C;&#x6F;")
    console.log("%u0048%u0065%u006C%u006C%u006F")
    console.log("0x48 0x65 0x6C 0x6C 0x6F")
    console.log("\N{LATIN CAPITAL LETTER H}\N{LATIN SMALL LETTER E}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER O}")
    // ASCII
    console.log("&#72;&#101;&#108;&#108;&#111;")
}

async function backtickQuote() {
        // Plain
    console.log(`Hello`)
    // Unicode Escape/UTF-8
    console.log(`\u0048\u0065\u006c\u006c\u006f`) 
    console.log(`\u0048\u0065\u006c\u006c\u006f\u000a`)
    console.log(`U+0048 U+0065 U+006C U+006C U+006F`)
    console.log(`\u0048\u0065\u006C\u006C\u006F`)
    console.log(`\u{48}\u{65}\u{6C}\u{6C}\u{6F}`)
    console.log(`\x{48}\x{65}\x{6C}\x{6C}\x{6F}`)
    console.log(`\x48\x65\x6C\x6C\x6f`)
    console.log(`\48\65\6C\6C\6F`)
    console.log(`&#x48;&#x65;&#x6C;&#x6C;&#x6F;`)
    console.log(`%u0048%u0065%u006C%u006C%u006F`)
    console.log(`0x48 0x65 0x6C 0x6C 0x6F`)
    console.log(`\N{LATIN CAPITAL LETTER H}\N{LATIN SMALL LETTER E}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER O}`)
    // ASCII
    console.log(`&#72;&#101;&#108;&#108;&#111;`)
}

function tripleBacktickQuote() {
            // Plain
    console.log(```Hello```)
    // Unicode Escape/UTF-8
    console.log(```\u0048\u0065\u006c\u006c\u006f```) 
    console.log(```\u0048\u0065\u006c\u006c\u006f\u000a```)
    console.log(```U+0048 U+0065 U+006C U+006C U+006F```)
    console.log(```\u0048\u0065\u006C\u006C\u006F```)
    console.log(```\u{48}\u{65}\u{6C}\u{6C}\u{6F}```)
    console.log(```\x{48}\x{65}\x{6C}\x{6C}\x{6F}```)
    console.log(```\x48\x65\x6C\x6C\x6f```)
    console.log(```\48\65\6C\6C\6F```)
    console.log(```&#x48;&#x65;&#x6C;&#x6C;&#x6F;```)
    console.log(```%u0048%u0065%u006C%u006C%u006F```)
    console.log(```0x48 0x65 0x6C 0x6C 0x6F```)
    console.log(```\N{LATIN CAPITAL LETTER H}\N{LATIN SMALL LETTER E}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER L}\N{LATIN SMALL LETTER O}```)
    // ASCII
    console.log(```&#72;&#101;&#108;&#108;&#111;```)
}