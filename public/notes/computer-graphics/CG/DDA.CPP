#include<graphics.h>
#include<conio.h>
#include<dos.h>
#include<stdio.h>
#include<math.h>
// +
void lineDDA(int x0, int y0, int xend, int yend);
float round(float number){
	return number ;
	}

int main(){

	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int x1, x2, y1, y2;
	 printf("Enter the starting point(x1,y1) and ending point(x2,y2) of line segment\n");
	 scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
	 lineDDA(x1, y1, x2, y2);
	 getch();
	 return 0;
}

void lineDDA(int x0, int y0, int xend, int yend){
	int dx, dy, steps, k;
	float xincr, yincr, x, y;

	dx = xend-x0;
	dy = yend-y0;
	x = x0;
	y = y0;

	if(abs(dx)>abs(dy))
		steps = abs(dx);
	else
		steps = abs(dy);

	xincr = dx/steps;
	yincr = dy/steps;

	putpixel(round(x), round(y), WHITE);
	for(k=0;k<steps;k++){
		x = x + xincr;
		y = y + yincr;
		putpixel(round(x), round(y), WHITE);
	}
}


