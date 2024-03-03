import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export function Chat() {
  return (
    <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Preview</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ActivityIcon className="h-4 w-4" />
                AI Evaluations
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <BotIcon className="h-4 w-4" />
                Ask AI
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <DataArchiveIcon className="h-4 w-4" />
                Your Data
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <InfoGencludeIcon className="h-4 w-4" />
                About Genclude
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Ask AI</h1>
          </div>
          <Button className="rounded-full border-gray-200 w-8 h-8 dark:border-gray-800" size="icon">
            <SearchIcon className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="@/avatar.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <form className="grid gap-4 md:gap-6">
            <Input id="question" placeholder="Type your question here..." />
            <Button>Ask AI</Button>
          </form>
          <div className="p-4">
            <h3 className="font-semibold">AI Response:</h3>
            <p className="text-gray-500 dark:text-gray-400">Your AI response will appear here.</p>
          </div>
        </main>
      </div>
    </div>
  )
}


function Package2Icon(props: any) {
  return (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="51.2pt" height="16.56pt" viewBox="0 0 640 207.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4651 2045 c-105 -89 -177 -254 -215 -493 -11 -73 -26 -93 -38 -50
-4 16 -6 18 -7 6 -2 -28 -34 -21 -86 18 -88 67 -228 145 -237 131 -5 -8 -8 -7
-8 5 0 28 -105 72 -217 92 -44 7 -66 -14 -52 -52 13 -34 49 -73 60 -66 5 3 9
-1 9 -9 0 -8 19 -30 43 -50 24 -19 76 -74 117 -121 47 -55 89 -93 117 -107 33
-16 43 -26 43 -45 0 -13 5 -24 11 -24 5 0 7 -5 4 -10 -4 -6 1 -23 10 -37 14
-20 19 -23 27 -12 7 10 7 8 3 -8 -5 -17 -2 -23 9 -23 9 0 16 -6 16 -14 0 -20
77 -79 91 -70 7 4 9 3 6 -3 -9 -14 48 -37 64 -27 7 4 10 3 5 -4 -3 -6 2 -13
13 -17 31 -9 72 6 81 30 8 20 -1 123 -16 195 -4 21 2 17 36 -23 23 -26 46 -47
52 -47 10 0 7 29 -7 63 -10 23 7 22 64 -6 73 -37 108 -40 158 -16 60 29 89 82
98 179 4 48 2 86 -5 105 -13 35 -68 95 -87 95 -15 0 -17 16 -3 25 16 10 11 76
-11 135 -11 30 -23 95 -28 144 -7 80 -11 92 -35 113 -34 29 -47 29 -85 -2z m9
-35 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z
m40 6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z
m-30 -110 c0 -16 -18 -31 -27 -22 -8 8 5 36 17 36 5 0 10 -6 10 -14z m-50 -21
c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z
m-60 -15 c-24 -15 -37 -11 -16 5 11 8 22 12 25 9 3 -3 -1 -9 -9 -14z m185 0
c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-45
-32 c0 -13 -56 -68 -69 -68 -20 0 -11 38 13 58 26 20 56 25 56 10z m-100 -18
c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z
m-44 -27 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m228 -5
c-3 -5 -12 -2 -20 6 -20 21 -17 28 5 14 11 -7 17 -16 15 -20z m-44 -28 c0 -15
-14 -28 -52 -45 -60 -28 -78 -31 -78 -12 1 30 62 77 101 77 23 0 29 -5 29 -20z
m70 -30 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z
m-930 -6 c0 -3 -7 -12 -15 -21 -20 -19 -32 -10 -14 11 14 15 29 21 29 10z
m901 -14 c18 0 -35 -47 -93 -84 -31 -20 -60 -36 -63 -36 -4 0 -5 14 -3 32 3
27 12 36 63 65 33 18 66 31 73 28 8 -3 18 -5 23 -5z m-767 -59 c3 -4 3 -11 0
-14 -8 -8 -34 3 -34 14 0 11 27 12 34 0z m-58 -29 c-9 -9 -37 8 -31 18 5 8 11
7 21 -1 8 -6 12 -14 10 -17z m108 -13 c-31 -12 -39 -10 -19 5 11 8 24 12 29 8
5 -3 1 -9 -10 -13z m756 7 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11
10 11 6 0 10 -2 10 -4z m-705 -56 c26 -17 27 -20 10 -21 -40 -3 -60 3 -80 22
-19 19 -19 19 10 19 17 0 44 -9 60 -20z m82 -2 c56 -39 36 -54 -23 -17 -34 21
-44 39 -22 39 6 0 27 -10 45 -22z m518 12 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3
10 19 12 23 12 15 0z m76 -6 c16 -20 2 -30 -54 -40 -53 -8 -55 0 -10 30 44 31
47 31 64 10z m57 -61 c3 -20 -1 -23 -30 -23 -32 0 -68 14 -58 23 38 32 84 32
88 0z m-690 11 c28 -8 24 -26 -10 -38 -33 -12 -89 9 -81 30 5 15 51 18 91 8z
m688 -59 c4 -8 3 -22 0 -30 -5 -14 -9 -14 -36 0 -45 23 -41 33 23 44 4 0 10
-6 13 -14z m-626 -14 c15 -28 14 -29 -31 -43 -37 -11 -43 -10 -55 7 -18 25
-13 38 17 46 42 12 58 10 69 -10z m576 -36 c31 -13 34 -17 24 -35 l-11 -21
-37 22 c-20 12 -44 28 -52 36 -12 11 -10 13 13 13 15 0 43 -7 63 -15z m-51
-48 c46 -26 63 -64 23 -52 -41 12 -83 41 -86 58 -5 23 15 21 63 -6z m-475 -7
c-20 -13 -33 -13 -25 0 3 6 14 10 23 10 15 0 15 -2 2 -10z m23 -27 c9 -9 -33
-54 -44 -47 -16 9 -9 42 9 47 27 7 28 7 35 0z m410 -15 c51 -12 62 -34 23 -44
-17 -4 -37 3 -65 22 -41 27 -56 52 -23 39 9 -3 38 -11 65 -17z m-393 -73 c0
-40 -22 -48 -40 -14 -9 15 -8 24 1 35 21 26 39 16 39 -21z m60 -71 c0 -17 -5
-17 -31 -4 -19 11 -26 40 -12 54 9 9 43 -31 43 -50z m35 16 c10 -22 16 -43 13
-45 -12 -12 -38 9 -38 30 0 13 -3 30 -6 39 -13 35 14 13 31 -24z m52 -38 c-3
-12 -8 -7 -20 20 -22 50 -21 56 4 24 11 -14 19 -34 16 -44z"/>
<path d="M4377 1713 c-12 -12 -7 -22 8 -17 8 4 15 10 15 15 0 11 -14 12 -23 2z"/>
<path d="M4207 1663 c-13 -12 -7 -26 6 -15 6 5 21 12 32 15 16 4 15 5 -6 6
-14 0 -29 -2 -32 -6z"/>
<path d="M371 1224 c-168 -45 -288 -170 -337 -351 -21 -78 -21 -278 0 -356 69
-255 281 -397 538 -359 235 34 368 198 368 454 l0 88 -205 0 -205 0 0 -60 0
-60 131 0 132 0 -7 -46 c-19 -143 -119 -232 -271 -242 -207 -12 -345 149 -345
403 0 196 84 345 222 391 66 22 177 15 234 -14 47 -24 107 -87 131 -137 l17
-35 79 0 79 0 -6 28 c-23 94 -130 223 -219 262 -112 49 -233 62 -336 34z"/>
<path d="M3620 695 l0 -535 75 0 75 0 0 535 0 535 -75 0 -75 0 0 -535z"/>
<path d="M5300 1028 l-1 -203 -22 30 c-64 87 -109 110 -217 110 -66 0 -96 -5
-131 -22 -65 -29 -125 -93 -162 -171 -29 -62 -32 -77 -35 -188 -4 -136 10
-209 55 -279 66 -103 137 -146 255 -153 70 -4 83 -2 134 23 38 19 66 42 87 71
17 24 34 41 39 38 4 -3 8 -32 8 -65 l0 -60 73 3 72 3 0 530 0 530 -77 3 -78 3
0 -203z m-133 -199 c38 -14 81 -56 106 -104 30 -57 36 -221 12 -295 -20 -61
-67 -118 -112 -136 -80 -34 -190 -4 -236 64 -73 107 -74 294 -3 402 44 67 153
99 233 69z"/>
<path d="M5863 1040 c-211 -45 -326 -235 -279 -460 52 -245 221 -377 433 -340
146 25 266 115 298 223 8 28 15 55 15 61 0 7 -24 9 -71 6 l-71 -5 -13 -40
c-26 -77 -109 -125 -214 -125 -64 0 -118 26 -160 77 -31 38 -58 100 -48 110 3
3 88 27 189 53 341 88 348 91 348 110 0 27 -38 129 -64 175 -32 54 -97 112
-152 136 -51 23 -151 32 -211 19z m129 -122 c65 -19 151 -130 122 -158 -14
-12 -384 -111 -395 -104 -14 8 -11 77 6 123 41 117 151 174 267 139z"/>
<path d="M1350 957 c-184 -41 -291 -209 -277 -437 7 -122 35 -190 111 -266 80
-80 133 -99 271 -99 89 0 107 4 163 29 67 31 132 94 150 146 l10 28 -71 12
c-59 11 -72 10 -76 -1 -9 -28 -73 -79 -114 -90 -62 -17 -142 -5 -195 28 -53
33 -92 98 -99 168 l-6 45 288 0 288 0 -6 88 c-7 108 -34 185 -88 246 -78 89
-221 131 -349 103z m151 -118 c79 -27 139 -106 139 -184 l0 -35 -210 0 -210 0
0 28 c0 41 47 128 82 154 64 45 135 58 199 37z"/>
<path d="M2263 960 c-23 -5 -55 -16 -71 -24 -31 -16 -92 -80 -92 -96 0 -6 -4
-10 -10 -10 -6 0 -10 28 -10 65 l0 66 -70 -3 -71 -3 -2 -393 -2 -392 73 0 72
0 0 229 c0 125 5 252 10 282 21 109 92 165 201 157 67 -5 103 -26 134 -79 18
-31 20 -55 23 -311 l3 -278 75 0 75 0 -4 297 c-4 325 -7 346 -62 411 -59 69
-172 103 -272 82z"/>
<path d="M3039 954 c-229 -70 -329 -376 -205 -622 30 -58 102 -126 164 -155
39 -18 66 -22 157 -22 106 0 112 1 172 34 66 36 102 74 133 143 34 74 31 78
-54 78 -66 0 -75 -2 -81 -20 -9 -30 -53 -79 -86 -95 -41 -22 -132 -19 -179 5
-85 43 -125 138 -118 283 3 78 8 100 33 146 38 69 88 103 160 109 30 2 65 2
79 -2 35 -9 91 -59 106 -96 12 -30 14 -30 86 -30 64 0 74 2 74 18 0 37 -49
119 -95 160 -83 73 -232 102 -346 66z"/>
<path d="M3952 623 l3 -268 27 -51 c49 -93 127 -140 251 -150 114 -10 123 -6
130 63 3 32 8 65 12 74 6 15 2 15 -40 1 -94 -31 -201 19 -225 106 -5 20 -10
139 -10 265 l0 227 -76 0 -75 0 3 -267z"/>
<path d="M4500 886 c0 -20 36 -79 69 -111 l41 -39 0 77 0 77 -55 0 c-30 0 -55
-2 -55 -4z"/>
</g>
</svg>

  )
}


function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function BotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function DataArchiveIcon(props: any) {
  return (
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12C9 11.5341 9 11.3011 9.07612 11.1173C9.17761 10.8723 9.37229 10.6776 9.61732 10.5761C9.80109 10.5 10.0341 10.5 10.5 10.5H13.5C13.9659 10.5 14.1989 10.5 14.3827 10.5761C14.6277 10.6776 14.8224 10.8723 14.9239 11.1173C15 11.3011 15 11.5341 15 12C15 12.4659 15 12.6989 14.9239 12.8827C14.8224 13.1277 14.6277 13.3224 14.3827 13.4239C14.1989 13.5 13.9659 13.5 13.5 13.5H10.5C10.0341 13.5 9.80109 13.5 9.61732 13.4239C9.37229 13.3224 9.17761 13.1277 9.07612 12.8827C9 12.6989 9 12.4659 9 12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5M3.5 7V13C3.5 16.7712 3.5 18.6569 4.67157 19.8284C5.37634 20.5332 6.3395 20.814 7.81608 20.9259" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12 3H4C3.05719 3 2.58579 3 2.29289 3.29289C2 3.58579 2 4.05719 2 5C2 5.94281 2 6.41421 2.29289 6.70711C2.58579 7 3.05719 7 4 7H20C20.9428 7 21.4142 7 21.7071 6.70711C22 6.41421 22 5.94281 22 5C22 4.05719 22 3.58579 21.7071 3.29289C21.4142 3 20.9428 3 20 3H16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
  )
}


function InfoGencludeIcon(props: any) {
  return (
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17V11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#1C274C"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
