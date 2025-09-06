#include<stdio.h>
#include<graphics.h>
#include<stdlib.h>
#include<math.h>

void rotate(int x1, int y1, int x2, int y2, float t, int xv=0, int yv=0);

// +

int main(){
	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");

	 int x1, y1, x2, y2, xv, yv, c;
	 float t;
	 printf("Enter the top left (x1,y1) and bottom right(x2,y2)"
		" verteces value of rectangle\n");
	 scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
	 printf("Enter the angle by which you want to rotate\n");
	 scanf("%f",&t);

	 l1:  printf("Enter your choice \n"
		"Enter 1 for - Rotate by origin\n"
		"Enter 2 for - Rotate by center of rectangle\n"
		"Enter 3 for - Enter your own pivot point\n"
		"Enter 0 for - Exit"
		);
	 scanf("%d",&c);
	 switch(c){
		case 0: exit(0);
		case 1: rotate(x1,y1,x2,y2,t);
			getchar();
			break;
		case 2: rotate(x1,y1,x2,y2,t,((x2-x1)/2)+x1,((y2-y1)/2)+y1);
			getchar();
			break;
		case 3: scanf("%d%d",xv,yv);
			rotate(x1,y1,x2,y2,t,xv,yv);
			getchar();
			break;
		default: printf("Enter the right choice!\nAPress any key to continue...");
			getchar();
			goto l1;
	 }
	return 0;
}

void rotate(int x1, int y1, int x2, int y2, float t, int xv, int yv){
	cleardevice();
	rectangle(x1,y1,x2,y2);
	int xn1, yn1, xn2, yn2;
	// another 2 vertices of rectangle
	int xd1=x1, yd1=y2, xd2=x2, yd2=y1;

	printf(" %d %d %d %d \n",xd1,yd1,xd2,yd2);

	//Tranformation to origin
	xn1 = x1-xv;
	yn1 = y1-yv;
	xn2 = x2-xv;
	yn2 = y2-yv;

	xd1 = xd1-xv;
	yd1 = yd1-yv;
	xd2 = xd2-xv;
	yd2 = yd2-yv;

	// Rotation about origin
	xn1 = xn1*cos((3.14/180)*t)-yn1*sin((3.14/180)*t);
	yn1 = xn1*sin((3.14/180)*t)+yn1*cos((3.14/180)*t);
	xn2 = xn2*cos((3.14/180)*t)-yn2*sin((3.14/180)*t);
	yn2 = xn2*sin((3.14/180)*t)+yn2*cos((3.14/180)*t);

	xd1 = xd1*cos((3.14/180)*t)-yd1*sin((3.14/180)*t);
	yd1 = xd1*sin((3.14/180)*t)+yd1*cos((3.14/180)*t);
	xd2 = xd2*cos((3.14/180)*t)-yd2*sin((3.14/180)*t);
	yd2 = xd2*sin((3.14/180)*t)+yd2*cos((3.14/180)*t);

	// Transformation to original position
	xn1 = xn1+xv;
	yn1 = yn1+yv;
	xn2 = xn2+xv;
	yn2 = yn2+yv;

	xd1 = xd1+xv;
	yd1 = yd1+yv;
	xd2 = xd2+xv;
	yd2 = yd2+yv;



       /*
	xn1 = (x1+xv)*cos((3.14/180)*t)-(y1-yv)*sin((3.14/180)*t)-xv;
	yn1 = (x1+xv)*sin((3.14/180)*t)+(y1+yv)*cos((3.14/180)*t)-yv;
	xn2 = (x2+xv)*cos((3.14/180)*t)-(y2-yv)*sin((3.14/180)*t)-xv;
	yn2 = (x2+xv)*sin((3.14/180)*t)+(y2+yv)*cos((3.14/180)*t)-yv;
	*/
       //	rectangle(xn1,yn1,xn2,yn2);

	printf("%d, %d, %d,%d  ,%d,%d",xv,yv,xn1,yn1,xn2,yn2);
	printf("\n %d %d %d %d",xd1,yd1,xd2,yd2);
	line(xn1, yn1, xd1, yd1);
	line(xd1, yd1, xn2, yn2);
	line(xn2, yn2, xd2, yd2);
	line(xd2, yd2, xn1, yn1);
       //	printf("%d,%d,%f",xn1,yn1,t);
	getchar();
}