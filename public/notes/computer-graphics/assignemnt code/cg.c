#include<graphics.h>

void main(){
	int Gd = DETECT;
	int gm = 0;

	//initgraph(Graphics driver, graphics mode, path of graphic file);
	initgraph(&Gd, &gm,NULL);
	
	//putpixel(int x, int y, color of pixel);
	putpixel(100, 200, WHITE);
	circle(200,200,50);
	getch();
	closegraph();
}
/*
Graphicd Driver in C:
EGA,VGA,CGA,EGAVGA,CGAVGA...	DETECT
1   2    3   4       5 		  0

Resolution: The maximum number of pixels that can be ploted on screen is called as resolution.
Pixel: It is the shortest picture element.

EGA: 0,1,2
VGA: 0,1
CGA: 0,1,2,3
...
DETECT: 0,1,2,3,4

Colors :  Black, GRAY, BLUE, RED, GREEN, YELLOW, CYAN, MAGENTA, LIGHTGREEN, LIGHTBLUE, LightRed, White



floodfill(int x, int y, int color)
(x,y) : seed point 

Assignment 3:
Plot a circles, increase it's radius with time, when it reachese max decrese it's radius

Make Blingking Circle
Collision Balls

Assignment 4:
Make somking person

Assignment 5: Movement of earth around sun in circular orbit
Assignment 6: Movement of earth around sun in eleptical orbit

*/

