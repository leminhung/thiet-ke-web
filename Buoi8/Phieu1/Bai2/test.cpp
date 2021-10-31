#include <bits/stdc++.h>
using namespace std;

int main()
{
  int a[] = {1, 2, 4, 8, 8, 9, 9, 4, 9};
  int size = sizeof(a) / sizeof(a[0]);
  bool check[size] = {false};
  int ans = 1;

  for (int i = 0; i < size; i++)
  {
    for (int j = i + 1; j < size; j++)
    {
      if (check[j] == false && a[j] == a[i])
      {
        ans++;
        check[j] = true;
      }
    }
    if (!check[i])
      cout << a[i] << " : " << ans << " lan" << endl;
    ans = 1;
  }
}