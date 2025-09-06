/*
*   Program to reflex tringle about x=y line
*   Date: 17-11-2020
*/

#include<stdio.h>
#include<graphics.h>
#include<stdlib.h>

void reflection(int x1, int y1, int x2,int y2,int x3, int y3);

// +

int main(){
	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int x1,y1,x2,y2,x3,y3;
	 printf("Enter the three vertices of trianlge\n");
	 scanf("%d%d%d%d%d%d",&x1,&y1,&x2,&y2,&x3,&y3);
	 reflection(x1,y1,x2,y2,x3,y3);
	 getchar();

	 return 0;
}

void reflection(int x1, int y1, int x2,int y2,int x3, int y3){
	int temp;
	cleardevice();

	// draw the original triangle on the screen
	line(x1, y1, x2, y2);
	line(x2, y2, x3, y3);
	line(x1, y1, x3, y3);

	// swap the value of x and y coordinate
	temp = x1;
	x1 = y1;
	y1 = temp;

	temp = x2;
	x2 = y2;
	y2 = temp;

	temp = x3;
	x3 = y3;
	y3 = temp;

	// draw the reflected triangle
	line(x1, y1, x2, y2);
	line(x2, y2, x3, y3);
	line(x1, y1, x3, y3);

	getchar();

}