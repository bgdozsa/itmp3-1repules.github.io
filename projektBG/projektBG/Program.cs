using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace projektBG
{
    class Program
    {
        static void Main(string[] args)
        {
            //Számoljuk össze hányszor szerepel a count-x-y-w.txt szövegben az
            //X , Y és W karakter. Az eredmény: X_száma + Y_száma - W_száma
            Console.WriteLine("count-x-y-z feladat:");
            string s = File.ReadAllText("count-x-y-w.txt");
            int eredményCount = s.Count(x => x == 'X') + s.Count(x => x == 'Y') - s.Count(x => x == 'W');
            Console.WriteLine($"x_szám: {s.Count(x => x == 'X')} + y_szám: {s.Count(x => x == 'Y')}" +
                $" - w_szám: {s.Count(x => x == 'W')} = {eredményCount}\n");

            //Keressük ki az after-z.txt file-ban a Z karakter után következő 
            //számjegy karatereket és az átlaguknak vegyük az egész részét.
            Console.WriteLine("after-z feladat:");
            List<int> számok = new List<int>();
            s = File.ReadAllText("after-z.txt");
            for (int i = 0; i < s.Length - 1; i++)
                if (s[i] == 'Z' && s[i + 1] >= '0' && s[i + 1] <= '9')
                    számok.Add(s[i + 1]-'0');
            int eredményAfter = Convert.ToInt32(Math.Floor(számok.Average()));
            Console.WriteLine($"Az átlag egészrésze: {eredményAfter}\n");

            //Az ötvenedik fibonacci szám legmagasabb helyiértékű számjegye 
            //kivonva a legkisebb helyiértékűből. Ha a nulladik: 0, az első: 1.
            Console.WriteLine("Fibonacci 50 feladat:");
            long[] fibonacci = new long[50];
            fibonacci[0] = 1;
            fibonacci[1] = 1;
            for (int i = 2; i < fibonacci.Length; i++)
            {
                fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            }
            Console.WriteLine($"Az ötvenedik fibonacci szám: {fibonacci[fibonacci.Length - 1]}");
            s = fibonacci[fibonacci.Length - 1].ToString();
            int eredményFib = s[s.Length - 1] - s[0];
            Console.WriteLine($"Az utolsó számjegy kivonása az első számjegyből:" +
                $" {s[s.Length - 1]} - {s[0]} = {eredményFib}\n");

            //A vers szövege több caesar.txt file-ban van lekódolva a Caesar-rejtjel segítségével.
            //A kódolás az angol ABC - t használja és az eltolást értékét az előző feladatok alapján
            //kapjuk meg. Az előző feladatok eredménye mind szám, feladatok eredményeinek összege a
            //kódolás eltolásának értéke.
            int eltolás = eredményCount + eredményAfter + eredményFib;
            Console.WriteLine($"Az eltolás nagysága: {eltolás}\n");
            eltolás = 10;
            Console.WriteLine($"Az eltolás nagysága: {eltolás}\n");

            Console.WriteLine("A Caesar-kódolás eredménye:");
            s = File.ReadAllText("caesar.txt");
            string kikódolt = "";
            foreach (char ch in s)
            {
                if (ch >= 'A' && ch <= 'Z')
                    kikódolt += Convert.ToChar(65 + (ch - 65 + eltolás) % 26).ToString();
                else if (ch >= 'a' && ch <= 'z')
                    kikódolt += Convert.ToChar(97 + (ch - 97 + eltolás) % 26).ToString();
                else
                    kikódolt += ch.ToString();
            }
            Console.WriteLine(kikódolt);
            Console.ReadKey();
        }
    }
}
