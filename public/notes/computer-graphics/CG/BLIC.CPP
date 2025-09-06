#include<graphics.h>
#include<conio.h>
//#include<dos.h>

int main(){

	 int gd = DETECT, gm = 0;
	 initgraph(&gd, &gm, "C:\\MUSIC\\TC\\BGI");
	 int min = 50, max = 150, r=min;

	 while(!kbhit()){
		if(r<max){
			circle(320, 240, r);
			r++;
		       //	delay(100);
			cleardevice();
		}
		else{
			r--;
			while(r!=min){
				circle(320, 240, r);
				r--;
				//delay(100);
				cleardevice();
			}
		}
	 }

	 getch();
	 closegraph();
	 return 0;


}

