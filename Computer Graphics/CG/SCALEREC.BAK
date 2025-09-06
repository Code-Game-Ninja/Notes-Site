#include<stdio.h>
#include<graphics.h>
#include<math.h>
#include<stdlib.h>

void scale(int x1, int y1, int x2, int y2, float sx, float sy, float t, int xv=0, int yv=0);

// +

int main(){
	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int x1, y1, x2, y2, xv, yv, c;
	 float t, sx, sy;
	 printf("Enter the top left (x1,y1) and bottom right(x2,y2)"
		" verteces value of rectangle\n");
	 scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
	 printf("Enter the scaling fector Sx and Sy: \n");
	 scanf("%f%f", &sx, &sy);

	 l1:  printf("Enter your choice \n"
		"Enter 1 for - Scale about the origin\n"
		"Enter 2 for - Scale about the fix point\n"
		"Enter 3 for - Scaling in the general direction\n"
		"Enter 4 for - Scaling in the general directoin and fixed point\n"
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

void scale(int x1, int y1, int x2, int y2, float sx, float sy, float t, int xv, int yv){
	cleardevice();
	rectangle(x1, y1, x2, y2);
	int xn1, yn1, xn2, yn2;
	// another 2 vertices of rectangle
	int xd1=x1, yd1=y2, xd2=x2, yd2=y1;
	xn1 = x1*((sx*cos((3.14/180)*t)*cos((3.14/180)*t))+sy*sin((3.14/180)*t)*sin((3.14/180)*t))
	 + y1*(sx*cos((3.14/180)*t)*sin((3.14/180)*t)-sy*cos((3.14/180)*t)*sin((3.14/180)*t)) +
	 ( -xv*((sx*cos((3.14/180)*t)*cos((3.14/180)*t))+sy*sin((3.14/180)*t)*sin((3.14/180)*t))
	   -yv*((sx*cos((3.14/180)*t)*sin((3.14/180)*t)-sy*cos((3.14/180)*t)*sin((3.14/180)*t)))
	   + xv
	 ) ;

}