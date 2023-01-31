//variables to move hucleberries - need to find a better way to do this. 
hDiameter = 10;
polkaDiameter = 15;
	
a = 180;
b = 270;
c = hDiameter;

d = 260;
e = 290;

f = 250
g = 238;

h = 220;
i = 290;

j = 180;
k = 310;

l = 155;
m = 300;

n = 140;
o = 270;

p = 150;
q = 238;

r = 260;
s = 270;

t = 260;
u = 170;

v = 140;
w = 170;

x = 220;
y = 150;

movementa = floor(random() * 10) +1;
movementb = floor(random() * 10) +1;
movementc = floor(random() * 10) +1;
movementd = floor(random() * 10) +1;
movemente = floor(random() * 10) +1;
movementf = floor(random() * 10) +1;
movementg = floor(random() * 10) +1;
movementh = floor(random() * 10) +1;
movementj = floor(random() * 10) +1;
movementk = floor(random() * 10) +1;
movementl = floor(random() * 10) +1;
movementm = floor(random() * 10) +1;
movementn = floor(random() * 10) +1;
movemento = floor(random() * 10) +1;
movementp = floor(random() * 10) +1;
movementq = floor(random() * 10) +1;
movementr = floor(random() * 10) +1;
movements = floor(random() * 10) +1;
movementt = floor(random() * 10) +1;
movementu = floor(random() * 10) +1;
movementv = floor(random() * 10) +1;
movementw = floor(random() * 10) +1;
movementx = floor(random() * 10) +1;
movementy = floor(random() * 10) +1;



function setup() {
		createCanvas(400,400);
		
		//movement of huckleberries
		movementa = floor(random() * 10) +1;
		movementb = floor(random() * 10) +1;
		movementd = floor(random() * 10) +1;
		movemente = floor(random() * 10) +1;
		movementf = floor(random() * 10) +1;
		movementg = floor(random() * 10) +1;
		movementh = floor(random() * 10) +1;
		movementi = floor(random() * 10) +1;
		movementj = floor(random() * 10) +1;
		movementk = floor(random() * 10) +1;
		movementl = floor(random() * 10) +1;
		movementm = floor(random() * 10) +1;
		movementn = floor(random() * 10) +1;
		movemento = floor(random() * 10) +1;
		movementp = floor(random() * 10) +1;
		movementq = floor(random() * 10) +1;
		movementr = floor(random() * 10) +1;
		movements = floor(random() * 10) +1;
		movementt = floor(random() * 10) +1;
		movementu = floor(random() * 10) +1;
		movementv = floor(random() * 10) +1;
		movementw = floor(random() * 10) +1;
		movementx = floor(random() * 10) +1;
		movementy = floor(random() * 10) +1;
		
		//speed of huckleberries
		aSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		bSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		dSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		eSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		fSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		gSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		hSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		iSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		jSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		kSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		lSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		mSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		nSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		oSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		pSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		qSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		rSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		sSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		tSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		uSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		vSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		wSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		
		

}

function draw() {
	
	//calling the keyPressed function
	keyPressed();
	
	//background
	background(233,205,208);
	
	//table
	fill(229,211,179)
	rect(60,290,50,110);
	rect(290,290,50,110);
	rect(60,210,280,140);
	
	//placemat
	fill(232,255,245)
	rect(80,230,240,100);
	
	//polka-dots on placemat
	fill(255,255,255)
	circle(310,250,polkaDiameter);
	circle(290,280,polkaDiameter);
	circle(310,310,polkaDiameter);
	circle(100,310,polkaDiameter);
	circle(110,280,polkaDiameter);
	circle(90,250,polkaDiameter);
	
	//plate
	fill(172,216,230)
	circle(200,250,190);
	
	//pancakes - light brown part
	fill(252,214,127)
	ellipse(200,260,160,120);
	ellipse(200,240,160,120);
	ellipse(200,220,160,120);
	ellipse(200,200,160,120);
	
	//pancakes - dark brown part
	fill(181,101,29)
	ellipse(200,200,130,90);
	
	//butter
	fill(253,239,178)
	rect(175,175,50,40);
	
	
	//huckleberries
	fill(100,0,100)
	circle(a,b,c);
	circle(d,e,c);
	circle(f,g,c);
	circle(h,i,c);
	circle(j,k,c);
	circle(l,m,c);
	circle(n,o,c);
	circle(p,q,c);
	circle(r,s,c);
	circle(t,u,c);
	circle(v,w,c);
	circle(x,y,c);
	
	//moving the huckleberries
	if (a >=390 || a <=0)
	{
		movementa *= -1;
	}
	a -= movementa;
	
	if (b >=390 || b <=0)
	{
		movementb *= -1;
	}
	b -= movementb;
	
	if (d >=390 || d <=0)
	{
		movementd *= -1;
	}
	d -= movementd;
	if (e >=390 || e <=0)
	{
		movemente *= -1;
	}
	e -= movemente;
	
	if (f >=390 || f <=0)
	{
		movementf *= -1;
	}
	f -= movementf;
	
	if (g >=390 || g <=0)
	{
		movementg *= -1;
	}
	g -= movementg;
	
	if (h >=390 || h <=0)
	{
		movementh *= -1;
	}
	h -= movementh;
	
	if (i >=390 || i <=0)
	{
		movementi *= -1;
	}
	i -= movementi;
	
	if (j >=390 || j <=0)
	{
		movementj *= -1;
	}
	j -= movementj;
	
	if (k >=390 || k <=0)
	{
		movementk *= -1;
	}
	k -= movementk;
	
	if (l >=390 || l <=0)
	{
		movementl *= -1;
	}
	l -= movementl;
	
	if (m >=390 || m <=0)
	{
		movementm *= -1;
	}
	m -= movementm;
	
	if (n >=390 || n <=0)
	{
		movementn *= -1;
	}
	n -= movementn;
	
	if (o >=390 || o <=0)
	{
		movemento *= -1;
	}
	o -= movemento;
	
	if (p >=390 || p <=0)
	{
		movementp *= -1;
	}
	p -= movementp;
	
	if (q >=390 || q <=0)
	{
		movementq *= -1;
	}
	q -= movementq;
	
	if (r >=390 || r <=0)
	{
		movementr *= -1;
	}
	r -= movementr;
	
	if (s >=390 || s <=0)
	{
		movements *= -1;
	}
	s -= movements;
	
	if (t >=390 || t <=0)
	{
		movementt *= -1;
	}
	t -= movementt;
	
	if (u >=390 || u <=0)
	{
		movementu *= -1;
	}
	u -= movementu;
	
	if (v >=390 || v <=0)
	{
		movementv *= -1;
	}
	v -= movementv;
	
	if (w >=390 || w <=0)
	{
		movementw *= -1;
	}
	w -= movementw;
	
	if (x >=390 || x <=0)
	{
		movementx *= -1;
	}
	x -= movementx;
	
	if (y >=390 || y <=0)
	{
		movementy *= -1;
	}
	y -= movementy;
	
	
	
	
	//making the shapes stay in bounds
	if(a > width)
    {
        a = 0;
    }
    if(a < 0)
    {
        a = width;
    }
    if(b > height)
    {
        b = 0;
    }
    if(b < 0)
    {
        b = height;
    }
	
	if(d > width)
    {
        d = 0;
    }
    if(d < 0)
    {
        d = width;
    }
    if(e > height)
    {
        e = 0;
    }
    if(e < 0)
    {
        e = height;
    }

	
	//text
	textSize(26)
	text("Huckleberry Pancakes",10,30);
	textSize(16)
	text("Brenna Bibler",300,395);
	
}

function keyPressed()
		{
			if(key == 'q')
			{
				c++;
				
			}
			else if(key == 'w')
			{
				c--;
			}
		}

