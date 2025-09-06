#include<graphics.h>
#include<conio.h>
#include<dos.h>

void drawman();
int main(){

	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int r = 0, r1;

	 while(!kbhit()){
		 r = 0;
		 r1 = 0;
		//smoke
		//line(330, 335, 360, 310);
		while(r<35){
			drawman();
			if(r<10){
				circle(340+r, 328-r, 5+(r/2));
				r++;
			       //	delay(200);
			       //	cleardevice();
			}
			if(r>9 && r<20){
			       //	drawman();
				circle(340+r, 328-r, 5+(r/2));
				circle(340+r1, 328-r1, 5+(r1/2));
				r++;
				r1++;
			}
			if(r<35 && r1>9){
			       //	drawman();
				circle(340+r, 328-r, 5+(r/2));
				circle(340+r1, 328-r1, 5+(r1/2));
				r++;
				r1++;
			}

			delay(200);
			cleardevice();
		}
	      /* while(r<40){
			drawman();
			circle(340+r, 328-r, 5+(r/2));
			circle(340+r1, 328-r1, 5+(r1/2));
			r++;
			r1++;
			delay(200);
			cleardevice();
			}

		while(r1<60){
			drawman();
			if(r<60){
				circle(340+r, 328-r, 5+(r/2));
				r++;
			}
			circle(340+r1, 328-r1, 5+(r1/2));
			r1++;
			delay(200);
			cleardevice();
			}

		//circle(360,310,15);
		//circle(385,285,25);  */

	 }

	 getch();
	 closegraph();
	 return 0;
}

void drawman(){

	//foots and body
	line(320, 360, 320, 420);
	line(320, 420, 290, 480);
	line(320, 420, 350, 480);

	//head
	circle(320, 330, 30);

	//eyes
	line(305, 320, 309, 320);
	line(328, 320, 332, 320);

	//nose
	line(320, 330, 320, 335);

	//left hand
	line(320, 360, 290, 400);
	line(290, 400, 295, 405);
	line(290, 400, 286, 407);
	line(290, 400, 280, 400);

	//right hand
	line(320, 360, 345, 380);  //uper elbow
	line(345, 380, 326, 345);  //below elbow
	//fingers
	line(326, 345, 330, 341);
	line(326, 345, 326, 341);
	line(326, 345, 320, 341);

	//ciggrate
	setlinestyle(0,1,3);
	line(322, 344, 330,335);

	setlinestyle(0,0,1);

	}