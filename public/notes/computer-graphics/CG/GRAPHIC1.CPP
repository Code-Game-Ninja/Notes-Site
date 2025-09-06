#include<graphics.h>
#include<conio.h>

int main(){
	int gm = DETECT, gd = 0;

	initgraph(&gm, &gd, "C:\\MUSIC\\TC\\BGI");

	circle(200,200,50);
	settextstyle(2,0,7);
	outtextxy(400,400,"HELLO");

	getch();
	closegraph();
	return 0;
}