#include<graphics.h>

int main(){

	int Gd = DETECT;
	int gm = 0;
	initgraph(&Gd, &gm,NULL);
	
	putpixel(50, 50, WHITE);
	line(50, 100, 100, 100);
	rectangle(50, 150, 150, 200);
	rectangle(50, 250, 100, 300);
	
	setcolor(BLUE);
	//Triangle 
	line(75, 350, 50, 400);
	line(50, 400, 100, 400);
	line(100, 400, 75, 350);
	
	circle(300, 50, 30);
	arc(300, 150, 300, 360, 30);
	
	setcolor(MAGENTA);
	ellipse(300, 250, 0, 360, 50, 30);
	ellipse(300, 350, 0, 90, 50, 30);
	
	getch();
	closegraph();
	return 0;
}
