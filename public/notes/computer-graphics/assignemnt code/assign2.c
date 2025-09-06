#include<graphics.h>

int main(){

	int Gd = DETECT;
	int gm = 0;
	initgraph(&Gd, &gm,NULL);
	
	setbkcolor(CYAN);
	
	//setcolor(BLUE);
	circle(100, 100, 40);
	
	/*settextstyle(int font, int direction, int font_size)*/
	//settextstyle(3, 0, 7);
	outtextxy(100, 200, "Hi!");
	
	floodfill(100,101, GREEN);
	
	rectangle(300, 200, 400,350);
	floodfill(350, 300, RED);
	

	getch();
	closegraph();
	return 0;
}


