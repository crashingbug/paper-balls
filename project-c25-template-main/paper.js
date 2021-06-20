class paper
{
	constructor(x,y)
	{
		var options = {
			restitution:2,
			friction:0,
			density:1.1,
			isStatic:false
		}
		this.x=x;
		this.y=y;
		this.radius=Math.round(random(1,100));
		
		
		this.image=loadImage("paper.png")
		this.bitOfPaper=Bodies.rectangle(this.x, this.y, this.radius, this.radius, options)
		//this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		//this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bitOfPaper)
		//World.add(world, this.leftWallBody)
		//World.add(world, this.rightWallBody);

	}
	display()
	{
			var location=this.bitOfPaper.position;
			//var posLeft=this.leftWallBody.position;
			//var posRight=this.rightWallBody.position;

			

			// push()
			// translate(posLeft.x, posLeft.y);
			// rectMode(CENTER)
			// //strokeWeight(4);
			// angleMode(RADIANS)
			// fill(255)
			// rotate(this.angle)
			// //rect(0,0,this.wallThickness, this.dustbinHeight);
			// pop()

			// push()
			// translate(posRight.x, posRight.y);
			// rectMode(CENTER)
			// //strokeWeight(4);
			// angleMode(RADIANS)
			// fill(255)
			// rotate(-1*this.angle)
			// //rect(0,0,this.wallThickness, this.dustbinHeight);
			// pop()

			push()
			translate(location.x, location.y+10^100000000000000000000000000000000);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			imageMode(RADIUS);
			image(this.image, 0,0,this.radius, this.radius)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}