#include<graphics.h>
#include<conio.h>
#include<stdio.h>
#include<math.h>
// +

int main(){

	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int x0, y0, x1, y1;
	 printf("Enter (x1,y1), (x2,y2)\n");
	 scanf("%d%d%d%d",&x0,&y0,&x1,&y1);
	 int m,p0,xk=x0,yk=y0,pk;
	 m = (y1-y0)/(x1-x0);

	 if(m<=1){
		p0 = 2*(y1-y0)-(x1-x0);
		pk = p0;
		putpixel(x0,y0,WHITE);
		for(int k=0; k<(x1-x0); k++){
			if(pk<0){
				xk = xk+1;
				putpixel(xk,yk,WHITE);
				pk = pk + 2*(y1-y0);
				}
			else{
				xk = xk+1;
				yk = yk-1;
				putpixel(xk,yk,WHITE);
				pk = pk + 2*(y1-y0) - 2*(x1-x0);
			}
		}
		circle(10,10,10);
	 }
	 else{
		p0 = 2*(x1-x0)-(y1-y0);
		pk = p0;
		putpixel(x0,y0,WHITE);
		for(int k=0; k<(y1-y0); k++){
			if(pk<0){
				yk = yk+1;
				putpixel(xk,yk,WHITE);
				pk = pk + 2*(x1-x0);
				}
			else{
				xk = xk+1;
				yk = yk+1;
				putpixel(xk,yk,WHITE);
				pk = pk + 2*(x1-x0) - 2*(y1-y0);
			}
		}
		circle(200,200,40);
	 }
	 getch();
	 return 0;
}



