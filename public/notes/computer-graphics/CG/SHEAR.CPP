/*
*   Program to shear a reactangle
*   Date: 17-11-2020
*/

#include<stdio.h>
#include<graphics.h>
#include<math.h>
#include<stdlib.h>

void shear();

// +

int main(){
	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 shear();
	 return 0;
}

void shear(){
	// digonal point of the rectangle to take uer input
	int x1,y1,x2,y2;
	// all vertices of the rectangle
	int xd1=x1, xd2=y2, xd2=x2, yd2=y1;
	int xd3=x2, yd3=y2, xd4=x1, yd4=y2, c;

	printf("Enter the top left(x1,y1) and bootom left(x2,y2) vertec of rectangle\n");
	scanf("%d%d%d%d",&x1, &y1, &x2, &y2);

	printf("Enter 1 for shear in x-direction\n"
		"Enter 2 for shear in y-direction\n"
		"Enter 3 for shear in direction parallel to y-axis\n"
		"Enter 4 for shear in direction parallel to x-axis\n"
		"Enter 5 for shear in both direction\n"
		"Enter 0 - Exit"
		);




}