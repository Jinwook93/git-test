package exception;

public class Main07 {

	public static void main(String[] args) {
		String[] src = {"5", "2", "7"};
		
		int[] arr = new int[3];
		
		try {
			for(int i=0; i<src.length; i++) {
				arr[i] = Integer.parseInt(src[i]);
				System.out.println(arr[i]);
			}
		} catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("데이터가 너무 많습니다.");
			e.printStackTrace();
		} catch (NumberFormatException | NullPointerException e) {
			System.out.println("입력값에 오류가 있습니다. ");
			e.printStackTrace();
		} catch (Exception e) {
			System.out.println("알 수 없는 에러 발생");
			e.printStackTrace();
		} finally {
			System.out.println("데이터 변환 종료");
		}
		
		System.out.println("---프로그램 종료---");
		
	}

}







