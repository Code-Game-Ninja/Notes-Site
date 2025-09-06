#include<graphics.h>
#include<conio.h>
#include<stdio.h>
#include<math.h>
// +
void drawpoints(int x, int y, int xc, int yc);

int main(){

	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int xc, yc, r, xk, yk, pk;
	 printf("Enter the Center of Circle\n");
	 scanf("%d%d",&xc,&yc);
	 printf("Enter the radius\n");
	 scanf("%d",&r);

	 xk = 0;
	 yk = r;
	 pk = 1-r;

	 while(xk<yk){
		if(pk<0){
			xk = xk + 1;
			drawpoints(xk, yk, xc, yc);
			pk = pk + (2*xk) + 1;
		}
		else{
			xk = xk + 1;
			yk = yk - 1;
			drawpoints(xk, yk, xc, yc);
			pk = pk + (2*xk) -(2*yk) + 1;
		}


	 }
	 getch();
	 return 0;
}

void drawpoints(int x, int y, int xc, int yc){
	putpixel(x+xc, y+yc, WHITE);
	putpixel(-x+xc, y+yc, WHITE);
	putpixel(-y+xc, x+yc, WHITE);
	putpixel(y+xc, x+yc, WHITE);
	putpixel(y+xc, -x+yc, WHITE);
	putpixel(x+xc, -y+yc, WHITE);
	putpixel(-x+xc, -y+yc, WHITE);
	putpixel(-y+xc, -x+yc, WHITE);
}